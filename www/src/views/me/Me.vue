<template>
  <div>
    <header class="me-header">
      <aside class="img-wrapper">
        <img v-if="token" src="../../assets/img/maomi.jpg">
        <router-link
          v-else 
          class="login-btn"
          to="/login">点击登录</router-link>
      </aside>
      <aside class="me-info">
        <div>
          <section>猫咪老师</section>
          <section class="introduction">简介：夏目友人帐猫咪老师</section>
        </div>
      </aside>
    </header>
    <section class="switch-content">
      <switch-bar></switch-bar>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import SwitchBar from '../../components/me/SwitchBar.vue'
export default {
  name: 'Me',
  components: {
    SwitchBar
  },
  data () {
    return {
      token: null,
    }
  }
}
</script>

<style lang="scss" scoped>
.me-header {
  height: 5rem;
  display: flex;
  height: 6rem;
  background: white;
  .img-wrapper {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    .login-btn {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      line-height: 4rem;
      text-align: center;
      color:  rgba(51, 51, 51, 0.2);
      background-image: url('../../assets/img/maomi.jpg');
    }
  }
  .me-info {
    width: 70%;
    display: flex;
    align-items: center;
    .introduction {
      margin-top: 0.5rem;
    }
  }
}
.switch-content {
  margin-top: 0.8rem;
}
</style>
