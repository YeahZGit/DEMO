<template>
  <div class="text-editor" v-show="visible">
    <editor-header
      title="文字"
      @cancel="cancelHandler">
    </editor-header>
    <section class="text-wrapper">
      <textarea placeholder="说点什么吧..."></textarea>
    </section>
    <section class="img-wrapper">
      <div class="add-img">+</div>
    </section>
    <section>位置信息</section>
  </div>
</template>

<script>
import EditorHeader from './EditorHeader'

export default {
  name: 'TextEditor',
  props: [
    'visible'
  ],
  components: {
    EditorHeader
  },
  data () {
    return {
    }
  },
  methods: {
    cancelHandler () {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.text-editor {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 100;
  .text-wrapper {
    textarea {
      border: none;
      width:100%;
      height: 6rem;
      resize: none;
      outline: none;
      font-size: 0.8rem;
    }
  }
  .img-wrapper {
    width: 100%;
    height: 6rem;
    border-top: 1px solid #dcdde1;
    border-bottom: 1px solid #dcdde1;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    .add-img {
      width: 25%;
      height: 80%;
      font-size: 4rem;
      line-height: 6rem;
      border: 1px dotted #eccc68;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #eccc68;
      border-radius: 0.3rem;
    }
  }
}
</style>
