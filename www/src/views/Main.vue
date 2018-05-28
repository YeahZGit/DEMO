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
  }
}
</script>

<style lang="scss" scoped>
</style>
