<template>
  <div class="comment">
    <div class="comment-list">
      <section class="comment-item">
        <section class="comment-info">
          <aside class="img-wrapper"><img src="../../assets/img/maomi.jpg"></aside>
          <aside class="username">张三</aside>
        </section>
        <section class="comment-content">
          <section>这是评论内容...</section>
        </section>
      </section>
    </div>
    <footer class="comment-form">
      <aside class="comment-input">
        <input type="text" placeholder="请填写评论内容">
      </aside>
      <aside class="release-btn">
        <div>发布</div>
      </aside>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Comment'
}
</script>

<style lang="scss" scoped>
.comment {
  .comment-list {
    .comment-item {
      margin-top: 1rem;
      .comment-info {
        display: flex;
        padding-left: 1rem;
        .img-wrapper {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .username {
          margin-left: 1rem;
        }
      }
      .comment-content {
        padding-left: 4.5rem;
        margin-top: -0.8rem;
        section:last-child {
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(51, 51, 51, 0.08);
        }
      }
    }
  }
  .comment-form {
    position: fixed;
    bottom: 0;
    border-top: 1px solid rgba(51, 51, 51, 0.08);
    height: 2.5rem;
    display: flex;
    align-items: center;
    width: 100%;
    .comment-input {
      flex: 1;
      input {
        width: 95%;
        margin: 0 0.5rem;
        height: 1.5rem;
        outline: none;
        border: none;
        background-color: rgba(245, 246, 250, 0.5);
        border-radius: 0.3rem;
      }
    }
    .release-btn {
      text-align: center;
      padding-right: 1rem;
    }
  }
}
</style>
