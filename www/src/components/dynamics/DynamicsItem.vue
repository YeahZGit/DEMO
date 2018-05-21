<template>
  <div class="dynamics-item">
    <div class="item">
      <aside class="user-img"><img src="../../assets/img/maomi.jpg"></aside>
      <aside class="content">
        <header>
          <span class="user-name">{{ item.author.username }}</span>
          <b class="share-btn">...</b>
        </header>
        <section class="content-wrapper">
          <div class="text">{{ item.content }}</div>
          <div class="imgs">
            <section
              :key="img"
              v-for="img in item.imgs">
              <img :src="img">
            </section>
          </div>
        </section>
        <footer class="interaction">
          <section>
            <img src="../../assets/img/approve.svg"> {{ item.approve_count }}
          </section>
          <section>
            <img src="../../assets/img/comment.svg"> {{ item.comment_count }}
          </section>
        </footer>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicsItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    type: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .dynamics-item {
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 1rem;
    background-color: white;
    .item {
      display: flex;
      width: 100%;
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
        .content-wrapper {
          .text {
            margin-bottom: 0.5rem;
          }
          .imgs {
            display: flex;
            flex-wrap: wrap;
            section {
              width: 5rem;
              height: 5rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
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
  }
</style>
