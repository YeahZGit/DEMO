<template>
  <div class="tabbar-wrapper">
    <ul class="tabbar">
      <li class="nav-btn">
        <router-link to="/home">
          <span><img src="../../assets/img/home.svg"></span>
          <span>首页</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/dynamics">
          <span><img src="../../assets/img/dynamics.svg"></span>
          <span>动态</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/editor">
          <span class="write-btn">+</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/message">
          <span><img src="../../assets/img/message.svg"></span>
          <span>消息</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/me">
          <span><img src="../../assets/img/me.svg"></span>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.tabbar-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  opacity: 0.97;
  .tabbar {
    height: 3rem;
    font-size: 0.75rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: solid 1px rgba(51, 51, 51, 0.08);
    .nav-btn {
      span {
        color: #7f8c8d;
      }
      a {
        display: flex;
        flex-direction: column;
      }
      .write-btn {
        width: 3rem;
        height: 2rem;
        background: #e6e6e6;
        border-radius: 0.5rem;
        color: white;
        font-weight: 900;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>
