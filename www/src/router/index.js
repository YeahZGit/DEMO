import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/home/Home.vue'
import Dynamics from '../views/dynamics/Dynamics.vue'
import Write from '../views/write/Write.vue'
import Message from '../views/message/Message.vue'
import Me from '../views/me/Me.vue'
import Contribution from '../components/me/Contribution.vue'
import Fans from '../components/me/Fans.vue'
import Follow from '../components/me/Follow.vue'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'dynamics',
          component: Dynamics
        },
        {
          path: 'write',
          component: Write
        },
        {
          path: 'message',
          component: Message
        },
        {
          path: 'me',
          component: Me,
          children: [
            {
              path: 'contribution',
              component: Contribution
            },
            {
              path: 'fans',
              component: Fans
            },
            {
              path: 'follow',
              component: Follow
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
