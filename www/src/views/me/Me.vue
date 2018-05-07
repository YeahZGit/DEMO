<template>
  <div>
    <header class="me-header">
      <aside class="img-wrapper">
        <img src="../../assets/img/maomi.jpg">
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
