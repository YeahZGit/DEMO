<template>
  <div class="info-editor">
    <editor-header
      title="编辑个人信息"
      button="完成"
      @cancel="cancelHandler"
      @release="completeHandler">
    </editor-header>
    <div class="editor">
      <aside class="img-wrapper">
        <input type="file" accept="image/*" @change="uploadImgHandler">
        <img v-if="!user.picture_url" src="../../assets/img/maomi.jpg">
        <img v-else :src="user.picture_url">
        <div>点击上传</div>
      </aside>
      <aside class="input-wrapper">
        <section>
          <input type="text" placeholder="用户名" v-model="user.username">
        </section>
        <section>
          <input type="text" placeholder="个人简介" v-model="user.introduction">
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
import EditorHeader from '../editor/EditorHeader.vue'
import configs from '../../constants/configs.js'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'InfoEditor',
  data () {
    return {
      headerUrl: null
    }
  },
  components: {
    EditorHeader
  },
  computed: {
    ...mapState('user', {
      user: state => state.userInfo
    })
  },
  methods: {
    ...mapActions('upload', {
      uploadImg: 'UPLOAD_IMG'
    }),
    ...mapActions('user', {
      updateUser: 'UPDATE_USER_BY_ID'
    }),
    completeHandler () {
      this.updateUser(this.user)
    },
    cancelHandler () {
      history.go(-1)
    },
    uploadImgHandler (e) {
      let vm = this
      let file = e.target.files[0] || e.dataTransfer.files
      let data = new FormData()
      data.append('picture', file)
      vm.uploadImg(data).then(res => {
        if (res.status === 200 && res.data.url) {
          vm.user.picture_url = configs.API_BASE + res.data.url
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.info-editor {
  height: 100vh;
  background-color: white;
  .editor {
    display: flex;
    margin-top: 1rem;
    padding: 0 1rem;
    .img-wrapper {
      overflow: hidden;
      width: 4rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.6rem;
      input {
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 0;
      }
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
    }
    .input-wrapper {
      margin-left: 0.5rem;
      width: 90%;
      section {
        width: 100%;
        height: 50%;
        input {
          border: none;
          outline: none;
          width: 100%;
          height: 90%;
          border-bottom: 1px solid rgba(51, 51, 51, 0.08);
        }
      }
    }
  }
}
</style>
