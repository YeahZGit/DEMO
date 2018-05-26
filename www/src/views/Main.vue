<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/common/Tabbar.vue'

export default {
  name: 'Main',
  components: {
    Tabbar
  },
  created () {
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
      this.$store.state.user.userInfo = userInfo
    }
    // else {
    //   // 登录或关闭无痕模式
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
