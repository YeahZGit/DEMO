<template>
  <div class="header">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.08);
  background-color: white;
  .title {
    line-height: 2.5rem;
  }
}
</style>
