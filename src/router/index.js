import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Partecipanti from '@/components/Partecipanti'
import Premi from '@/components/Premi'
import Video from '@/components/Video'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/partecipanti',
      name: 'Partecipanti',
      component: Partecipanti
    },
    {
      path: '/premi',
      name: 'Premi',
      component: Premi
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
