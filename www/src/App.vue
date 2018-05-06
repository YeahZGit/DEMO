<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/Tabbar.vue';
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
</style>
