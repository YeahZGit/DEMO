<template>
  <div class="dynamics-item">
    <aside class="user-img">
      <img src="../../assets/img/maomi.jpg">
    </aside>
    <aside class="content">
      <header>
        <span class="user-name">猫咪老师</span>
        <b class="share-btn">...</b>
      </header>
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet ...
      </section>
      <footer class="interaction">
        <section>
          <img src="../../assets/img/approve.svg"> 100
        </section>
        <section>
          <img src="../../assets/img/comment.svg"> 100
        </section>
      </footer>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'DynamicsItem',
  props: {
  }
}
</script>

<style lang="scss" scoped>
  .dynamics-item {
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 1rem;
    background-color: white;
    .user-img {
      width: 25%;
      display: flex;
      justify-content: center;
      padding-top: 2rem;
      img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
      }
    }
    .content {
      width: 75%;
      padding-top: 1rem;
      header {
        display: flex;
        justify-content: space-between;
        padding-right: 1rem;
        .share-btn {
          text-align: end;
          font-size: 1.5rem;
          color: #e6e6e6;
          position: relative;
          top: -0.8rem;
        }
      }
      .interaction {
        display: flex;
        margin-top: 0.5rem;
        section:last-child {
          margin-left: 1.5rem;
        }
        img {
          height: 1.6rem;
          width: 1.6rem;
        }
      }
    }
  }
</style>
