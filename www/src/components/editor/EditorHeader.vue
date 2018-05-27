<template>
  <div class="editor-header">
    <section class="header-item" @click="$emit('cancel')">取消</section>
    <section class="header-item">{{ title }}</section>
    <section class="header-item">
      <div class="release" @click="$emit('release')">{{ button || '发布'}}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EditorHeader',
  props: [
    'title',
    'button'
  ]
}
</script>

<style lang="scss" scoped>
.editor-header {
  line-height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.08);
  padding: 0 1rem;
  .header-item:first-child {
    color: #dcdde1;
  }
  .release {
    background-color: #fa983a;
    border-radius: 0.2rem;
    color: white;
    width: 3rem;
    text-align: center;
    line-height: 2rem;
  }
}
</style>
