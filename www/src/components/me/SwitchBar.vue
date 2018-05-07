<template>
  <div class="switch">
    <section class="switch-item">
      <router-link to="/me/contribution">贡献</router-link>
    </section>
    <section class="switch-item">
      <router-link to="/me/fans">粉丝</router-link>
    </section>
    <section class="switch-item">
      <router-link to="/me/follow">关注</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MeSwitchBar'
}
</script>

<style lang="scss" scoped>
.switch {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  background: white;
  .switch-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(189, 187, 187, 0.3);
    height: 100%;
    width:33%;
    a {
      color: #7f8c8d;
    }
    &:last-child {
      border: none;
    }
  }
}
</style>
