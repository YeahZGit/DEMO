<template>
  <div class="recomment grid-item">
    <section
      class="recomment-item"
      v-for="item in dynamics"
      :key="item._id">
      <section class="header-img">
        <img :src="item.title_img">
      </section>
      <section class="title">
        <div>{{ item.title }}</div>
      </section>
      <section class="info">
        <aside class="header"><img :src="item.author.picture_url"></aside>
        <aside class="approve">
          <img src="../../assets/img/approve.svg">
          <span>{{ item.approve_count }}</span>
        </aside>
      </section>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
      this.dynamics = this.recommendDynamics
    })
  }
}
</script>

<style lang="scss" scoped>
.recomment {
  float: right;
  .recomment-item {
    width: 45%;
    background-color: white;
    border-radius: 0.7rem;
    overflow: hidden;
    float: left;
    margin-top: 0.8rem;
    margin: 0.5rem 0.55rem;
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
</style>
