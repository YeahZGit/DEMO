<template>
  <div class="login">
    <back-header></back-header>
    <div class="login-wrapper">
      <header class="login-title">用户注册</header>
      <section>
        <div class="input-wrapper">
          <input type="text" placeholder="username" v-model="user.username">
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="password" v-model="user.password">
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="confirm password">
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
      this.register(this.user);
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
