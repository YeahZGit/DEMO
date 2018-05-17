<template>
  <div class="back-header">
    <section @click="goBack">返回</section>
    <!-- <section class="title">{{ title }}</section> -->
  </div>
</template>

<script>
export default {
  name: 'BackHeader',
  props: ['title'],
  methods: {
    goBack () {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.back-header {
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 2.5rem;
  border-bottom: 1px solid rgba(51, 51, 51, 0.08);
  padding-left: 1.5rem;
  color: #dcdde1;
}
</style>
