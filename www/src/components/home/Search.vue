<template>
  <div class="search" :class="{'focus': focus}">
    <div class="search-header">
      <aside class="logo" v-show="!focus">FoodKey</aside>
      <aside class="search-input">
        <form @submit="searchHandler" action="#">
          <input
            type="search"
            placeholder="搜索动态/用户"
            @focus="focusHandler"
            v-model="query">
          <input type="submit" value="">
        </form>
      </aside>
      <aside class="cancel-btn">
        <span @click="cancel" v-show="focus">取消</span>
        <!-- <span @click="searchHandler" v-show="focus" class="search-btn">搜索</span> -->
      </aside>
    </div>
    <div class="search-content" v-show="focus">
      <section class="history">
        <header class="header">历史纪录</header>
        <div class="history-tag">
          <tag :tags="history" @useHistory="clickHistory"></tag>
        </div>
      </section>
      <div class="search-list">
        <section class-="users" v-if="searchContent.users.length">
          <header class="header">相关用户</header>
          <user-cell
            v-for="item in searchContent.users"
            :key="item._id"
            :user="item">
          </user-cell>
        </section>
        <section class="dynamics" v-if="searchContent.dynamics.length">
          <header class="header">相关动态</header>
          <dynamics-item
            v-for="item in searchContent.dynamics"
            :key="item._id"
            :type="item.type"
            :item="item">
          </dynamics-item>
        </section>
      </div>
      <div class="prompt" v-show="showPrompt">未找到相关内容...</div>
    </div>
  </div>
</template>

<script>
import Tag from '../common/Tag.vue'
import UserCell from '../me/UserCell.vue'
import DynamicsItem from '../dynamics/DynamicsItem.vue'
import { mapActions, mapState } from 'vuex'
import { setSearchHistory, getSearchHistory } from '../../utils/searchHistory'

export default {
  name: 'Search',
  components: {
    Tag,
    UserCell,
    DynamicsItem
  },
  data () {
    return {
      focus: false,
      query: null,
      searchContent: {
        users: [],
        dynamics: []
      },
      history: [],
      showPrompt: false
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.userInfo
    })
  },
  methods: {
    ...mapActions('search', {
      search: 'SEARCH'
    }),
    focusHandler () {
      this.focus = true
      this.history = getSearchHistory()
    },
    cancel () {
      this.focus = false
      this.query = null
      this.showPrompt = false
      this.searchContent.users = []
      this.searchContent.dynamics = []
    },
    searchHandler () {
      if (this.query) {
        setSearchHistory(this.query)
        this.search({ query: this.query, userId: this.user._id }).then(res => {
          if (res.status === 200 && res.data) {
            this.searchContent = res.data
            if (!this.searchContent.users.length && !this.searchContent.dynamics.length) {
              this.showPrompt = true
            } else {
              this.showPrompt = false
            }
          }
        })
      }
    },
    clickHistory (queryStr) {
      this.query = queryStr
      this.searchHandler()
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  .search-header {
    display: flex;
    justify-content: space-between;
    .logo {
      line-height: 1.8rem;
      vertical-align: middle;
      width: 20%;
      text-align: center;
      color: #fa983a;
    }
    .search-input {
      height: 1.8rem;
      min-width: 4rem;
      border-radius: 2rem;
      width: 80%;
      background-color: rgba(245, 246, 250, 0.5);
      form {
        width: 100%;
        input {
          outline: none;
          border: none;
          display: block;
          width: 90%;
          margin: 0.3rem auto;
          background-color: rgba(245, 246, 250, 0);
          font-size: 0.9rem;
          color: #7f8c8d;
        }
      }
    }
  }
}
.focus {
  height: 100vh;
  position: fixed;
  background: white;
  z-index: 100;
  line-height: 1.8rem;
  .search-input {
    width: 85% !important;
  }
  .cancel-btn {
    width: 15%;
    text-align: center;
    color: #ced6e0;
    .search-btn {
      width: 3rem;
      background-color: #fa983a;
      color: white;
      border-radius: 1rem;
      margin-left: 0.2rem;
    }
  }
  .search-content {
    font-size: 0.8rem;
    .search-list {
      max-height: 100vh;
      overflow-y: auto;
    }
    & > section {
      margin-bottom: 1rem;
    }
    .prompt {
      margin-top: 0.5rem;
      color: #dcdde1;
    }
    .header {
      color: #4b4b4b;
      font-weight: 900;
    }
  }
}
</style>
