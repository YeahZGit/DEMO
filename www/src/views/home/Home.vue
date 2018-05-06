<template>
  <div>
    <header class="home-header">
      <aside class="logo">LOGO</aside>
      <aside class="search-wrapper">
        <search></search>
      </aside>
    </header>
    <section class="swipe">
      <mt-swipe>
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="nav-wrapper">
      <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/food.jpg">
        </div>
        <div class="nav-title">demo</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/food.jpg">
        </div>
        <div class="nav-title">demo</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/food.jpg">
        </div>
        <div class="nav-title">demo</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/food.jpg">
        </div>
        <div class="nav-title">demo</div>
      </section>
       <section class="nav-item">
        <div class="nav-img">
          <img src="../../assets/food.jpg">
        </div>
        <div class="nav-title">demo</div>
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
.home-header {
  display: flex;
  height:1.8rem;
  padding: 0.8rem;
  padding-bottom: 2rem;
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
  height: 7rem;
}
.nav-wrapper {
  display: flex;
  justify-content: space-around;
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
  }
}
.recommend-list {
  margin-top: 2rem;
}
</style>
