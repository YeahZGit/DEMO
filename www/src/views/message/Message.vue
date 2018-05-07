<template>
  <div>
    <page-header title="消息"></page-header>
    <div class="message-list">
      <section class="message-item">
        <aside class="icon"><img src="../../assets/img/approve.svg"></aside>
        <aside>赞</aside>
      </section>
      <section class="message-item">
        <aside class="icon comment"><img src="../../assets/img/comment.svg"></aside>
        <aside>评论</aside>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/common/PageHeader'
export default {
  name: 'Message',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
.message-list {
  background-color: white;
  margin-top: 0.8rem;
  .message-item {
    height: 4.5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 1.2rem;
    .comment {
      background-color: #b33939 !important;
    }
    .icon {
      width: 3rem;
      height: 3rem;
      background-color: #218c74;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.2rem;
      img {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
  }
}
</style>
