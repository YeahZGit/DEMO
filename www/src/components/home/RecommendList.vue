<template>
  <div class="recomment" v-masonry item-selector=".recomment-item">
    <section
      v-masonry-tile
      class="recomment-item"
      v-for="item in dynamics"
      :key="item._id">
      <div class="item-wrapper">
        <section class="header-img">
          <img :src="item.title_img">
        </section>
        <section class="title">
          <div>{{ item.title }}</div>
        </section>
        <section class="info">
          <aside class="header"><img :src="item.author && item.author.picture_url"></aside>
          <aside class="approve">
            <img src="../../assets/img/approve.svg">
            <span>{{ item.approve_count }}</span>
          </aside>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import configs from '../../constants/configs.js'

export default {
  name: 'RecommendList',
  data () {
    return {
      dynamics: []
    }
  },
  computed: {
    ...mapState('dynamics', {
      recommendDynamics: state => state.recommendDynamics
    })
  },
  methods: {
    ...mapActions('dynamics', {
      getRecommendDynamics: 'GET_RECOMMEND_DYNAMICS'
    })
  },
  created () {
    this.getRecommendDynamics().then(() => {
      let recDynamics = this.recommendDynamics
      for (let i = 0; i < recDynamics.length; i++) {
        recDynamics[i].title_img = configs.API_BASE + recDynamics[i].title_img
        if (recDynamics[i].author) {
          recDynamics[i].author.picture_url = configs.API_BASE + recDynamics[i].author.picture_url
        }
      }
      this.dynamics = recDynamics
    })
  }
}
</script>

<style lang="scss">
.recomment {
  display: flex;
  justify-content: space-around;
  .recomment-item {
    width: 50%;
    overflow: hidden;
    box-sizing: border-box;
    margin-top: 0.6rem;
    .item-wrapper {
      border-radius: 0.7rem;
      background-color: white;
      overflow: hidden;
      width: 95%;
      margin: 0 auto;
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
}
</style>
