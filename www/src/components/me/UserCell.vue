<template>
  <div class="user-cell">
    <section class="item">
      <section class="img-wrapper">
        <img :src="headerUrl">
      </section>
      <div class="right">
        <section class="info-wrapper">
          <div>{{ user.username }}</div>
          <div>{{ user.introduction || '暂无简介'}}</div>
        </section>
        <section class="options-btn">
          <div @click="addFollowHandler(user._id)" v-if="!user.is_follow">关 注</div>
          <div @click="removeFollowHandler(user._id)" v-else>取消关注</div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import configs from '../../constants/configs.js'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UserCell',
  props: {
    user: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: state => state.userInfo
    }),
    headerUrl () {
      return configs.API_BASE + this.user.picture_url
    }
  },
  methods: {
    ...mapActions('user', {
      addFollow: 'ADD_FOLLOW',
      removeFollow: 'REMOVE_FOLLOW'
    }),
    addFollowHandler (followId) {
      this.addFollow({ userId: this.userInfo._id, followId: followId })
    },
    removeFollowHandler (followId) {
      this.removeFollow({ userId: this.userInfo._id, followId: followId })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-cell {
  .item {
    height: 4.2rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(51, 51, 51, 0.08);
    .img-wrapper {
      height: 3.2rem;
      width: 3.2rem;
      margin: 0 1rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      .info-wrapper {
        div:first-child {
          font-weight: 800;
          color: #666;
        }
        div:last-child {
          margin-top: 0.2rem;
        }
      }
      .options-btn {
        padding-right: 0.8rem;
        div {
          border: 1px solid #fa983a;
          color: #fa983a;
          border-radius: 0.4rem;
          line-height: 1rem;
          padding: 0.2rem 0.3rem;
          min-width: 3.5rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
