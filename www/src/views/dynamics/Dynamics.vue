<template>
  <div>
    <page-header title="动态"></page-header>
    <div class="dynamics-list">
      <dynamics-item></dynamics-item>
      <dynamics-item></dynamics-item>
      <dynamics-item></dynamics-item>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/common/PageHeader'
import DynamicsItem from '../../components/dynamics/DynamicsItem.vue'
export default {
  name: 'Dynamics',
  components: {
    PageHeader,
    DynamicsItem
  }
}
</script>

<style lang="scss" scoped>
  .dynamics-list {
    margin-top: 0.8rem;
  }
</style>