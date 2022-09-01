import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
// import HelloWorld from '/src/components/HelloWorld.vue'
import About from '/src/components/About.vue'
import Jobs from '/src/components/Jobs.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
//   {
//     path: '/HelloWorld',
//     name: 'HelloWorld',
//     component: HelloWorld
//   },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }
]

export default createRouter({ history, routes })