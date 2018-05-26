<template>
  <div class="follow">
    <!-- <section class="fans-item">
      <div class="info">
        <section class="img-wrapper">
          <img src="../../assets/img/maomi.jpg">
        </section>
        <section class="info-wrapper">
          <div>李四</div>
          <div>最新动态</div>
        </section>
      </div>
      <section class="options-wrapper">
        <div class="option">取消关注</div>
      </section>
    </section> -->
    <user-cell
      v-for="user in follows"
      :key="user._id"
      :user="user"
      @addFollow="addFollowHandler"
      @removeFollow="removeFollowHandler">
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
      follows: state => state.allFollows
    })
  },
  methods: {
    ...mapActions('user', {
      getAllFollows: 'GET_ALL_FOLLOWS_BY_USER_ID',
      addFollow: 'ADD_FOLLOW',
      removeFollow: 'REMOVE_FOLLOW'
    }),
    addFollowHandler () {
      this.addFollow({})
    },
    removeFollowHandler () {

    }
  },
  created () {
    let userId = JSON.parse(localStorage.getItem('userInfo'))._id;
    this.getAllFollows({ userId })
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
