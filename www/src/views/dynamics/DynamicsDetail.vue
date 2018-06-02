<template>
  <div class="dynamics-detail">
    <back-header></back-header>
    <div>
      <dynamics-item :item="dynamics" v-if="dynamics.type === 1"></dynamics-item>
      <article-item :item="dynamics" v-else></article-item>
    </div>
    <comment></comment>
  </div>
</template>

<script>
import BackHeader from '../../components/common/BackHeader.vue'
import DynamicsItem from '../../components/dynamics/DynamicsItem.vue'
import ArticleItem from '../../components/dynamics/ArticleItem.vue'
import Comment from '../../components/dynamics/Comment.vue'
import { mapActions } from 'vuex'

export default {
  name: 'DynamicsDetail',
  data () {
    return {
      dynamics: {}
    }
  },
  components: {
    BackHeader,
    DynamicsItem,
    ArticleItem,
    Comment
  },
  methods: {
    ...mapActions('dynamics', {
      getDynamicsById: 'GET_DYNAMICS_BY_ID'
    })
  },
  created () {
    this.getDynamicsById({ dynamicsId: this.$parent.$route.params.dynamicsId }).then(res => {
      if (res.status === 200 && res.data) {
        this.dynamics = res.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.dynamics-detail {
  min-height: 100vh;
  background-color: white;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
}
</style>
