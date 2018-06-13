<template>
  <div class="login">
    <back-header></back-header>
    <div class="login-wrapper">
      <section class="logo"><img src="../assets/img/foodkey.png"></section>
      <header class="login-title">用户注册</header>
      <section>
        <div class="input-wrapper">
          <input type="text" placeholder="username" v-model="user.username">
        </div>
        <div class="input-wrapper">
          <input type="password" placeholder="password" v-model="user.password">
        </div>
        <div class="input-wrapper">
          <input type="password" placeholder="confirm password">
        </div>
        <div>
          <div class="btn btn-danger" @click="submit">注册</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BackHeader from '../components/common/BackHeader.vue'
import { mapActions } from 'vuex'
import { Toast } from 'mint-ui'

export default {
  name: 'Register',
  components: {
    BackHeader
  },
  data () {
    return {
      user: {
        username: null,
        password: null
      },
      confirmPassword: null
    }
  },
  methods: {
    ...mapActions('user', {
      register: 'REGISTER'
    }),
    submit () {
      this.register(this.user).then(res => {
        Toast('注册成功，返回登录页面')
        setTimeout(() => {
          this.$router.push('/login')
        }, 1500)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-wrapper {
    height: 55vh;
    width: 70vw;
    display: flex;
    flex-direction: column;
    .logo {
      width: 5rem;
      height: 5rem;
      margin: -6rem auto 1rem auto;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .login-title {
      text-align: center;
    }
    .input-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      border-bottom: 1px solid #d1d8e0;
      input {
        width: 95%;
        height: 1.5rem;
        border: none;
        outline: none;
        font-size: 1rem;
      }
    }
    .btn {
      width: 100%;
      margin-top: 2rem;
      background-color: #e55039;
      border-radius: 0.3rem;
      height: 2rem;
      line-height: 2rem;
      color: white;
      text-align: center;
    }
    .register-btn {
      text-align: right;
      font-size: 1rem;
      margin-top: 0.8rem;
      a {
        color: #e55039;
      }
    }
  }
}
</style>
