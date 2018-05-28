<template>
  <div class="dynamics-detail">
    <back-header></back-header>
    <div>
      <dynamics-item :item="dynamics"></dynamics-item>
    </div>
    <comment></comment>
  </div>
</template>

<script>
import BackHeader from '../../components/common/BackHeader.vue'
import DynamicsItem from '../../components/dynamics/DynamicsItem.vue'
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
  padding-top: 3rem;
}
</style>
