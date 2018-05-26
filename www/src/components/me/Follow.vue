<template>
  <div class="follow">
    <user-cell
      v-for="user in follows"
      :key="user._id"
      :user="user"
      @addFollow="addFollowHandler(user._id)"
      @removeFollow="removeFollowHandler(user._id)">
    </user-cell>
  </div>
</template>

<script>
import UserCell from './UserCell.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Follow',
  components: {
    UserCell
  },
  computed: {
    ...mapState('user', {
      userId: state => state.userInfo._id,
      follows: state => state.allFollows
    })
  },
  methods: {
    ...mapActions('user', {
      getAllFollows: 'GET_ALL_FOLLOWS_BY_USER_ID',
      addFollow: 'ADD_FOLLOW',
      removeFollow: 'REMOVE_FOLLOW'
    }),
    addFollowHandler (followId) {
      this.addFollow({ userId: this.userId, followId })
    },
    removeFollowHandler (followId) {
      this.removeFollowHandler({ userId: this.userId, followId })
    }
  },
  created () {
    this.getAllFollows({ userId: this.userId })
  }
}
</script>

<style lang="scss" scoped>
.follow {
  height: 80vh;
  background-color: white;
  margin-top: 0.8rem;
  .fans-item {
    height: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    border-bottom: 1px solid rgba(51, 51, 51, 0.08);
    .info {
      display: flex;
      align-items: center;
      .img-wrapper {
        height: 3.2rem;
        width: 3.2rem;
        margin-right: 1rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .info-wrapper {
        div:first-child {
          font-weight: 800;
          color: #666;
        }
        div:last-child {
          margin-top: 0.2rem;
        }
      }
    }
    .options-wrapper {
      display: flex;
      align-items: center;
      .option {
        border: 1px solid rgba(51, 51, 51, 0.08);
        border-radius: 0.05rem;
        padding: 0.15rem 0.2rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
