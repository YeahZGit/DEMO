<template>
  <div class="search" :class="{'focus': focus}">
    <div class="search-header">
      <aside class="logo" v-show="!focus">FoodKey</aside>
      <aside class="search-input">
        <input
          type="text"
          placeholder="search"
          @focus="focusHandler">
      </aside>
      <aside class="cancel-btn">
        <span @click="cancel" v-show="focus">取消</span>
      </aside>
    </div>
    <div class="search-content" v-show="focus">
      <section class="history">
        <header>历史纪录</header>
      </section>
      <section class-="users">
        <header>相关用户</header>
      </section>
      <section class="dynamics">
        <header>相关动态</header>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      focus: false
    }
  },
  methods: {
    focusHandler () {
      this.focus = true
    },
    cancel () {
      this.focus = false
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
    justify-content: space-around;
    .logo {
      line-height: 1.8rem;
      vertical-align: middle;
      width: 20%;
      text-align: center;
    }
    .search-input {
      height: 1.8rem;
      min-width: 4rem;
      border-radius: 2rem;
      width: 80%;
      background-color: rgba(245, 246, 250, 0.5);
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
.focus {
  height: 100vh;
  position: fixed;
  background: white;
  z-index: 100;
  line-height: 1.8rem;
  .cancel-btn {
    width: 15%;
    text-align: center;
  }
  .search-content {
    padding: 0.5rem 0;
    font-size: 0.8rem;
  }
}
</style>
