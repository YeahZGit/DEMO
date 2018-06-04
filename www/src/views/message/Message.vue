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
      <section
        class="message-item"
        v-for="message in messages"
        :key="message._id">
        <aside class="icon message-icon">
          <img v-if="!message.user.picture_url" src="../../assets/img/maomi.jpg">
          <img v-else :src="message.user.picture_url">
        </aside>
        <aside class="right">
          <aside>
            <section>{{ message.user.username }}</section>
            <section v-if="message.type === 1">在你的动态中添加评论</section>
            <section v-if="message.type === 2">赞了你的动态</section>
          </aside>
          <aside class="date">{{ message.create_at }}</aside>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/common/PageHeader'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Message',
  data () {
    return {
      messages: [{user: {username: '张三'}, type: 1, create_at: '12:00'}]
    }
  },
  components: {
    PageHeader
  },
  computed: {
    ...mapState('user', {
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapActions('message', {
      getMessagesByUserId: 'GET_MESSAGES_BY_USER_ID'
    })
  },
  created () {
    this.getMessagesByUserId({ userId: this.userInfo._id }).then(messages => {

    })
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
    padding: 0 1.2rem;
    .comment {
      background-color: #22a6b3 !important;
    }
    .icon {
      width: 3rem;
      height: 3rem;
      background-color: #dff9fb;
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
    .right {
      display: flex;
      flex: 1;
      justify-content: space-between;
      .date {
        position: relative;
      }
    }
    .message-icon {
      background-color: white;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
