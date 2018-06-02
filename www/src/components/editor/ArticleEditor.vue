<template>
  <div class="article-editor" v-show="visible">
    <editor-header
      title="文字"
      @cancel="cancelHandler"
      @release="releaseHandler">
    </editor-header>
    <div class="editor-wrapper">
      <section class="dynamics-header">
        <input type="file" accept="image/*" @change="uploadImgHandler">
        <img v-show="dynamics.title_img" :src="dynamics.title_img">
        <div class="prompt">点击添加图片</div>
      </section>
      <section class="dynamics-title">
        <input type="text" placeholder="请输入文章标题" v-model="dynamics.title">
      </section>
      <section class="dynamics-content">
        <quill @contentChange="contentChangeHandler"></quill>
      </section>
    </div>
  </div>
</template>

<script>
import EditorHeader from './EditorHeader.vue'
import Quill from './Quill.vue'
import { mapActions } from 'vuex'
import configs from '../../constants/configs'

export default {
  name: 'ArticleEditor',
  props: [
    'visible'
  ],
  components: {
    EditorHeader,
    Quill
  },
  data () {
    return {
      dynamics: {
        type: 2,
        content: null,
        title_img: null,
        author: JSON.parse(localStorage.getItem('userInfo'))._id
      }
    }
  },
  methods: {
    ...mapActions('upload', {
      uploadImg: 'UPLOAD_IMG'
    }),
    ...mapActions('dynamics', {
      addDynamics: 'ADD_DYNAMICS'
    }),
    cancelHandler () {
      this.$emit('hide', 2)
    },
    uploadImgHandler (e) {
      let vm = this
      let file = e.target.files[0] || e.dataTransfer.files
      let data = new FormData()
      data.append('picture', file)
      vm.uploadImg(data).then(res => {
        if (res.status === 200 && res.data.url) {
          this.dynamics.title_img = configs.API_BASE + res.data.url
        }
      })
    },
    contentChangeHandler (content) {
      this.dynamics.content = content
    },
    releaseHandler () {
      this.addDynamics(this.dynamics).then(res => {
        if (res.status === 200) {
          console.log('发布成功')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.article-editor {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 100;
  .editor-wrapper {
    .dynamics-header {
      position: relative;
      height: 9rem;
      width: 100%;
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 100;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .prompt {
        height: 100%;
        background-color: #f5f6fa;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
      }
    }
    .dynamics-title {
      height: 2rem;
      width: 100%;
      margin-top: 0.5rem;
      input {
        width: 100%;
        outline: none;
        border: none;
        height: 100%;
        font-size: 1.2rem;
        border-bottom: 1px solid rgba(51, 51, 51, 0.08);
      }
    }
    .dynamics-content {
      margin-top: 0.5rem;
    }
  }
}
</style>
