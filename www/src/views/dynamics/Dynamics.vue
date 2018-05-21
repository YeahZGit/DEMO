<template>
  <div class="dynamics">
    <page-header title="动态"></page-header>
    <div class="dynamics-list">
      <dynamics-item
        v-for="item in dynamics"
        :key="item._id"
        :type="item.type"
        :item="item">
      </dynamics-item>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/common/PageHeader'
import DynamicsItem from '../../components/dynamics/DynamicsItem.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Dynamics',
  components: {
    PageHeader,
    DynamicsItem
  },
  data () {
    return {
      dynamics: []
    }
  },
  computed: {
    ...mapState('dynamics', {
      currentDynamics: state => state.dynamics
    })
  },
  methods: {
    ...mapActions('dynamics', {
      getDynamics: 'GET_DYNAMICS_BY_USER_ID'
    })
  },
  created () {
    let userId = JSON.parse(localStorage.getItem('userInfo'))._id
    this.getDynamics({ userId }).then(() => {
      this.dynamics = this.currentDynamics
    })
  }
}
</script>

<style lang="scss" scoped>
.dynamics {
  margin-bottom: 5rem;
  .dynamics-list {
    margin-top: 0.8rem;
  }
}
</style>
