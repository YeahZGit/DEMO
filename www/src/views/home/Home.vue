<template>
  <div class="home">
    <header class="home-header">
      <search></search>
    </header>
    <section class="swipe">
      <mt-swipe>
        <mt-swipe-item
          v-for="item in theme0"
          :key="item._id">
          <router-link :to="item.page_url">
            <img :src="item.img">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="nav-wrapper">
      <section class="nav-item"
        v-for="item in theme1"
        :key="item._id">
        <router-link class="nav-img" :to="item.page_url">
          <img :src="item.img">
        </router-link>
        <div class="nav-title">{{ item.title }}</div>
      </section>
    </section>
    <section class="recommend-list">
      <recommend-list></recommend-list>
    </section>
  </div>
</template>

<script>
import Search from '../../components/home/Search.vue'
import RecommendList from '../../components/home/RecommendList.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Search,
    RecommendList
  },
  data () {
    return {
      theme0: [],
      theme1: []
    }
  },
  methods: {
    ...mapActions('theme', {
      getThemeByLevel: 'GET_THEME_BY_LEVEL'
    })
  },
  created () {
    this.getThemeByLevel({ level: 0 }).then(res => {
      if (res.status === 200 && res.data) {
        this.theme0 = res.data
      }
    })
    this.getThemeByLevel({ level: 1 }).then(res => {
      if (res.status === 200 && res.data) {
        this.theme1 = res.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: white;
  .swipe {
    height: 13rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .nav-wrapper {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;
    .nav-item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 0.8rem;
      .nav-img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nav-title {
        text-align: center;
        margin-top: 0.2rem;
      }
    }
  }
  .recommend-list {
    background-color: #f5f6fa;
    padding-bottom: 3.5rem;
  }
}
</style>
