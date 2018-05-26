<template>
  <div class="info-editor">
    <editor-header
      :title="编辑个人信息"
      :button="完成"
      @release="completeHandler">
    </editor-header>
  </div>
</template>

<script>
import EditorHeader from '../editor/EditorHeader.vue'

export default {
  name: 'InfoEditor',
  components: {
    EditorHeader
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
