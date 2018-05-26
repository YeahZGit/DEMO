<template>
  <div class="fans">
    <!-- <section class="fans-item">
      <section class="img-wrapper">
        <img src="../../assets/img/maomi.jpg">
      </section>
      <section class="info-wrapper">
        <div>张三</div>
        <div>最新动态</div>
      </section>
    </section> -->
    <user-cell></user-cell>
  </div>
</template>

<script>
import UserCell from './UserCell.vue'

export default {
  name: 'Fans',
  components: {
    UserCell
  }
}
</script>

<style lang="scss" scoped>
.fans {
  height: 80vh;
  background-color: white;
  margin-top: 0.8rem;
  .fans-item {
    height: 4.2rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(51, 51, 51, 0.08);
    .img-wrapper {
      height: 3.2rem;
      width: 3.2rem;
      margin: 0 1rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .info-wrapper {
      div:first-child {
        font-weight: 800;
        color: #666;
      }
      div:last-child {
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
