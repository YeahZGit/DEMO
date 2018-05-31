<template>
  <div class="quill">
  </div>
</template>

<script>
import Quill from 'quill'

export default {
  name: 'Quill',
  methods: {
    createEditor () {
      var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike']
      ];
      const options = {
        // debug: 'info',
        modules: {
          toolbar: [
            [{ 'size': ['small', false, 'large'] }],
            ['bold', 'italic'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image']
          ],
        },
        placeholder: '请输入文章内容...',
        theme: 'snow'
      }
      const editor = new Quill('.quill', options)
      editor.on('editor-change', () => {
        this.$emit('contentChange', editor.container.firstChild.innerHTML)
      });
    }
  },
  mounted () {
    this.createEditor()
  }
}
</script>

<style lang="scss">
@import url('../../assets/style/quill.snow.css');
.ql-toolbar {
  border: none !important;
  border-bottom: 1px solid rgba(51, 51, 51, 0.08) !important;
}
.ql-container {
  border: none !important;
}
.ql-editor {
  height: 50vh;
  border: none !important;
  color: #333;
}
</style>
