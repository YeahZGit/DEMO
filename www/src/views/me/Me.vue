<template>
  <div class="me">
    <header class="me-header">
      <aside class="img-wrapper">
        <img v-if="!user.picture_url" src="../../assets/img/maomi.jpg">
        <img v-else :src="user.picture_url">
      </aside>
      <aside class="me-info">
        <div>
          <section>{{ user.username }}</section>
          <section class="introduction">简介：{{ user.introduction || '暂无简介'}}</section>
        </div>
      </aside>
      <aside class="info-edit">
        <router-link to="info-editor">
          <i class="icon ion-ios-arrow-forward"></i>
        </router-link>
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
import { mapState } from 'vuex'

export default {
  name: 'Me',
  components: {
    SwitchBar
  },
  computed: {
    ...mapState('user', {
      user: state => state.userInfo
    })
  }
}
</script>

<style lang="scss" scoped>
.me {
  margin-bottom: 3rem;
}
.me-header {
  height: 5rem;
  display: flex;
  height: 6rem;
  background: white;
  .img-wrapper {
    width: 20%;
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
  .info-edit {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ion-ios-arrow-forward {
      font-size: 1.8rem;
      color: #dcdde1;
    }
  }
}
.switch-content {
  margin-top: 0.8rem;
}
</style>
