<template>
  <div class="recomment grid-item">
    <section class="recomment-item">
      <section class="header-img">
        <img src="../../assets/img/food.jpg">
      </section>
      <section class="title">
        <div>这是一个标题</div>
      </section>
      <section class="info">
        <aside class="header"><img src="../../assets/img/maomi.jpg"></aside>
        <aside class="approve"><img src="../../assets/img/approve.svg"> 100</aside>
      </section>
    </section>
    <section class="recomment-item">
      <section class="header-img">
        <img src="../../assets/img/food.jpg">
      </section>
      <section class="title">
        <div>这是一个标题</div>
      </section>
      <section class="info">
        <aside class="header"><img src="../../assets/img/maomi.jpg"></aside>
        <aside class="approve"><img src="../../assets/img/approve.svg"> 100</aside>
      </section>
    </section>
    <section class="recomment-item">
      <section class="header-img">
        <img src="../../assets/img/food.jpg">
      </section>
      <section class="title">
        <div>这是一个标题</div>
      </section>
      <section class="info">
        <aside class="header"><img src="../../assets/img/maomi.jpg"></aside>
        <aside class="approve"><img src="../../assets/img/approve.svg"> 100</aside>
      </section>
    </section>
    <section class="recomment-item">
      <section class="header-img">
        <img src="../../assets/img/food.jpg">
      </section>
      <section class="title">
        <div>这是一个标题</div>
      </section>
      <section class="info">
        <aside class="header"><img src="../../assets/img/maomi.jpg"></aside>
        <aside class="approve"><img src="../../assets/img/approve.svg"> 100</aside>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RecommendList'
}
</script>

<style lang="scss" scoped>
.recomment {
  float: right;
  .recomment-item {
    width: 45%;
    background-color: white;
    border-radius: 0.7rem;
    overflow: hidden;
    float: left;
    margin-top: 0.8rem;
    margin: 0.5rem 0.55rem;
    .header-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .title {
      margin: 0.3rem;
    }
    .info {
      padding: 0.5rem;
      padding-bottom: 0.6rem;
      display: flex;
      justify-content: space-between;
      .header {
        width: 1.5rem;
        height: 1.5rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .approve {
        color: #e6e6e6;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
}
</style>
