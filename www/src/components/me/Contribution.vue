<template>
  <div class="contribution">
    <dynamics-item
      v-for="item in dynamics"
      :key="item._id"
      :type="item.type"
      :item="item">
    </dynamics-item>
  </div>
</template>

<script>
import DynamicsItem from '../dynamics/DynamicsItem.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Contribution',
  components: {
    DynamicsItem
  },
  data () {
    return {
      dynamics: []
    }
  },
  computed: {
    ...mapState('dynamics', {
      selfDynamics: state => state.selfDynamics
    })
  },
  methods: {
    ...mapActions('dynamics', {
      getSelfDynamics: 'GET_SELF_DYNAMICS_BY_USER_ID'
    })
  },
  created () {
    let userId = JSON.parse(sessionStorage.getItem('userInfo'))._id
    this.getSelfDynamics({ userId }).then(() => {
      this.dynamics = this.selfDynamics
    })
  }
}
</script>

<style lang="scss" scoped>
  .contribution {
    margin-top: 0.8rem;
  }
</style>
