<template>
  <div class="dynamics-item">
    <div class="item">
      <header class="header">
        <aside class="user-img"><img :src="headerUrl"></aside>
        <aside class="user-info">
          <span class="user-name">{{ item.author.username }}</span>
          <span class="create-time">{{ item.create_at }}</span>
        </aside>
        <!-- <b class="share-btn">...</b> -->
      </header>
      <section class="content">
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
      </section>
      <footer class="interaction">
        <section>
          <img src="../../assets/img/approve.svg">
          <span class="count">{{ item.approve_count }}</span>
        </section>
        <section>
          <img src="../../assets/img/comment.svg">
          <span class="count">{{ item.comment_count }}</span>
        </section>
      </footer>
    </div>
  </div>
</template>

<script>
import configs from '../../constants/configs.js'

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
  },
  computed: {
    headerUrl () {
      return configs.API_BASE + this.item.author.picture_url
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
    padding: 0.5rem 1.5rem;
    .header {
      display: flex;
      .user-img {
        width: 4rem;
        img {
          width: 2.8rem;
          height: 2.8rem;
          border-radius: 50%;
        }
      }
      .user-info {
        display: flex;
        flex-direction: column;
        .create-time {
          margin-top: 0.3rem;
        }
      }
    }
    .content {
      width: 100%;
      margin: 0.8rem 0;
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
          width: 100%;
          section {
            width: 33%;;
            height: 6rem;
            box-sizing: border-box;
            padding: 0.2rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .interaction {
      display: flex;
      margin-top: 0.5rem;
      section {
        width: 33%;
        display: flex;
        justify-content: center;
        img {
          height: 1.6rem;
          width: 1.6rem;
        }
        .count {
          margin-left: 0.8rem;
          line-height: 1.6rem;
        }
      }
    }
  }
}
</style>
