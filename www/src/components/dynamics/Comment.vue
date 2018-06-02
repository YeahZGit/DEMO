<template>
  <div class="comment">
    <div class="comment-list">
      <header class="comment-header">评论区：</header>
      <div v-if="!comments.length" class="prompt">暂无评论内容</div>
      <section
        class="comment-item"
        v-for="comment in comments"
        :key="comment._id">
        <section class="comment-info">
          <aside class="img-wrapper">
            <img :src="comment.commentator.picture_url">
          </aside>
          <aside class="username">{{ comment.commentator.username }}</aside>
        </section>
        <section class="comment-content">
          <section>{{ comment.content }}</section>
        </section>
      </section>
    </div>
    <footer class="comment-form">
      <aside class="comment-input">
        <input type="text" v-model="content" placeholder="请填写评论内容">
      </aside>
      <aside class="release-btn">
        <div @click="addCommentHandler">发布</div>
      </aside>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Comment',
  data () {
    return {
      comments: [],
      content: null
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapActions('comment', {
      addComment: 'ADD_COMMENT',
      getCommentsByDynamicsId: 'GET_COMMENTS_BY_DYNAMICS_ID'
    }),
    addCommentHandler () {
      let comment = {
        commentator: this.userInfo._id,
        dynamics: this.$parent.$route.params.dynamicsId,
        content: this.content
      }
      this.addComment(comment).then(res => {
        if (res.status === 200 && res.data) {
          this.comments = res.data
        }
      })
    }
  },
  created () {
    this.getCommentsByDynamicsId({ dynamicsId: this.$parent.$route.params.dynamicsId }).then(res => {
      if (res.status === 200 && res.data) {
        this.comments = res.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.comment {
  .comment-list {
    .comment-header {
      padding: 0.5rem 1rem;
    }
    .prompt {
      text-align: center;
      margin-top: 2rem;
      color: #dcdde1;
    }
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
    background-color: white;
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
      width: 3rem;
    }
  }
}
</style>
