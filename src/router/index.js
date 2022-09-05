import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
// import HelloWorld from '/src/components/HelloWorld.vue'
import About from '/src/views/About.vue'
import Jobs from '/src/views/jobs/Jobs.vue'
import JobDetails from '/src/views/jobs/JobDetails.vue'

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
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  }
]

export default createRouter({ history, routes })