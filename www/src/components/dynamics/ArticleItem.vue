<template>
  <div class="article-detail">
    <section class="title-img">
      <img v-if="item.title_img" :src="item.title_img">
    </section>
    <section>
      <user-cell :user="item.author"></user-cell>
    </section>
    <section class="article-title">
      <h3>{{ item.title }}</h3>
    </section>
    <section class="content">
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import UserCell from '../me/UserCell.vue'

export default {
  name: 'ArticleItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    UserCell
  }
}
</script>

<style lang="scss" scoped>
.article-detail {
  .title-img {
    height: 13rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .article-title {
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
<style lang="scss">
.content {
  img {
    max-width: 100% !important;
  }
}
</style>
