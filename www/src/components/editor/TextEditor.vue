<template>
  <div class="text-editor" v-show="visible">
    <editor-header
      title="文字"
      @cancel="cancelHandler"
      @release="releaseHandler">
    </editor-header>
    <section class="text-wrapper">
      <textarea placeholder="说点什么吧..." v-model="dynamics.content"></textarea>
    </section>
    <section class="img-wrapper">
      <div class="imgs" :key="img" v-for="img in dynamics.imgs">
        <img :src="img">
      </div>
      <div class="add-img">
        <input type="file" accept="image/*" @change="uploadImgHandler">
        <span>+</span>
      </div>
    </section>
    <!-- <section>位置信息</section> -->
  </div>
</template>

<script>
import EditorHeader from './EditorHeader'
import { mapActions } from 'vuex'
import configs from '../../constants/configs'
import { Toast } from 'mint-ui'

export default {
  name: 'TextEditor',
  props: [
    'visible'
  ],
  components: {
    EditorHeader
  },
  data () {
    return {
      dynamics: {
        type: 1,
        imgs: [],
        content: null,
        author: JSON.parse(sessionStorage.getItem('userInfo'))._id
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
      this.$emit('hide', 1)
    },
    uploadImgHandler (e) {
      let vm = this
      let file = e.target.files[0] || e.dataTransfer.files
      let data = new FormData()
      data.append('picture', file)
      vm.uploadImg(data).then(res => {
        if (res.status === 200 && res.data.url) {
          vm.dynamics.imgs.push(configs.API_BASE + res.data.url)
        }
      })
    },
    releaseHandler () {
      this.addDynamics(this.dynamics).then(res => {
        Toast('发布成功')
        setTimeout(() => {
          this.$router.push('/dynamics')
        }, 1500)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-editor {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 100;
  .text-wrapper {
    textarea {
      border: none;
      width:100%;
      height: 6rem;
      resize: none;
      outline: none;
      font-size: 0.8rem;
    }
  }
  .img-wrapper {
    width: 100%;
    min-height: 6rem;
    border-top: 1px dotted rgba(51, 51, 51, 0.2);
    border-bottom: 1px dotted rgba(51, 51, 51, 0.2);;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    .imgs {
      width: 5rem;
      height: 5rem;
      margin-right: 0.5rem;
      border-radius: 0.3rem;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .add-img {
      width: 5rem;
      height: 5rem;
      font-size: 4rem;
      line-height: 6rem;
      border: 1px dotted #eccc68;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #eccc68;
      border-radius: 0.3rem;
      position: relative;
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
}
</style>
