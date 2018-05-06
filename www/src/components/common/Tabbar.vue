<template>
  <div class="tabbar-wrapper">
    <ul class="tabbar">
      <li class="nav-btn">
        <router-link to="/home">
          <span></span>
          <span>首页</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/dynamics">
          <span></span>
          <span>动态</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/write">
          <span class="write-btn">+</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/message">
          <span></span>
          <span>消息</span>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/me">
          <span></span>
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
  .tabbar {
    height: 2.25rem;
    font-size: 0.75rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: solid 1px rgba(51, 51, 51, 0.08);
    .nav-btn {
      .write-btn {
        width: 2.5rem;
        height: 1.5rem;
        /* line-height: 1.5rem; */
        /* text-align: center; */
        border: solid 1px #666;
        /* color: #666; */
        /* font-size: 1rem; */
        border-radius: 0.5rem;
      }
    }
  }
}
</style>
