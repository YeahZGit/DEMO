<template>
  <div class="home">
    <header class="home-header">
      <aside class="logo">FoodKey</aside>
      <aside class="search-wrapper">
        <search></search>
      </aside>
    </header>
    <section class="swipe">
      <mt-swipe>
        <mt-swipe-item>
          <img src="../../assets/img/food.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/img/food.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/img/food.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="nav-wrapper">
      <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/img/food.jpg">
        </div>
        <div class="nav-title">标题</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/img/food.jpg">
        </div>
        <div class="nav-title">标题</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/img/food.jpg">
        </div>
        <div class="nav-title">标题</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/img/food.jpg">
        </div>
        <div class="nav-title">标题</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/img/food.jpg">
        </div>
        <div class="nav-title">标题</div>
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
export default {
  components: {
    Search,
    RecommendList
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: white;
}
.home-header {
  display: flex;
  height:1.8rem;
  padding: 0.8rem;
  padding-bottom: 1rem;
  .logo {
    line-height: 1.8rem;
    vertical-align: middle;
    width: 20%;
    text-align: center;
  }
  .search-wrapper {
    width: 80%;
  }
}
.swipe {
  height: 10rem;
  img {
    height: 100%;
    width: 100%;
  }
}
.nav-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  .nav-item {
    .nav-img {
      width: 3rem;
      height: 3rem;
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
}
</style>
