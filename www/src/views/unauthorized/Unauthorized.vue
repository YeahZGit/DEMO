<template>
  <div class="unauthorized">
    <section class="logo">
      <img src="../../assets/img/foodkey.png">
    </section>
    <section class="prompt">未登录，请登录后查看内容</section>
    <section class="login-btn">
      <router-link to="/login" class="btn">点击登录</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style lang="scss" scoped>
.unauthorized {
  height: 100vh;
  background-color: white;
  .logo {
    width: 6rem;
    height: 6rem;
    margin: 0rem auto 1rem auto;
    padding-top: 5rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .prompt {
    text-align: center;
  }
  .login-btn {
    .btn {
      display: block;
      margin: 2rem auto;
      text-align: center;
      line-height: 2rem;
      width: 6rem;
      border-radius: 3rem;
      background-color: #fa983a;
      color: white;
    }
  }
}
</style>
