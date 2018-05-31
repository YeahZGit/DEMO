<template>
  <div class="write">
    <header class="write-header">
      <div class="date">
        <aside class="day">08</aside>
        <aside class="week-month-year">
          <section class="week">星期二</section>
          <section class="month-year">05/2018</section>
        </aside>
      </div>
    </header>
    <section class="article-tyle">
      <section class="article-tyle-btn" @click="startEdit(1)">
        <section class="icon text"><img src="../../assets/img/text.svg"></section>
        <section class="title">文字</section>
      </section>
      <section class="article-tyle-btn" @click="startEdit(2)">
        <section class="icon show"><img src="../../assets/img/show.svg"></section>
        <section class="title">大显身手</section>
      </section>
      <!-- <section class="article-tyle-btn">
        <section class="icon photo"><img src="../../assets/img/photo.svg"></section>
        <section class="title">美拍</section>
      </section> -->
    </section>
    <text-editor :visible="showTextEditor" @hide="hideHandler"></text-editor>
    <article-editor :visible="showArticleEditor" @hide="hideHandler"></article-editor>
  </div>
</template>

<script>
import TextEditor from '../../components/editor/TextEditor.vue'
import ArticleEditor from '../../components/editor/ArticleEditor.vue'

export default {
  name: 'Editor',
  components: {
    TextEditor,
    ArticleEditor
  },
  data () {
    return {
      showTextEditor: false,
      showArticleEditor: true
    }
  },
  methods: {
    startEdit (type) {
      if (type === 1) {
        this.showTextEditor = true
      } else if (type === 2) {
        this.showArticleEditor = true
      }
    },
    hideHandler (type) {
      if (type === 1) {
        this.showTextEditor = false
      } else if (type === 2) {
        this.showArticleEditor = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.write {
  background-color: white;
  height: 100vh;
  .write-header {
    padding: 2rem;
    .date {
      display: flex;
      .day {
        height: 5rem;
        width: 4rem;
        font-size: 2.8rem;
      }
      .month-year {
        margin-top: 0.6rem;
      }
    }
  }
  .article-tyle {
    padding: 2rem;
    position: absolute;
    bottom: 10rem;
    display: flex;
    .article-tyle-btn {
      margin-right: 2rem;
      .icon {
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        margin: 0 auto;
        background-color: #22a6b3;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 70%;
          height: 70%;
        }
      }
      .text {
        background-color: #dff9fb;
      }
      .photo {
        background-color: #ff7979;
      }
      .title {
        text-align: center;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
