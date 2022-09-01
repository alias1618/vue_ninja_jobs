import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import HelloWorld from '/src/components/HelloWorld.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

export default createRouter({ history, routes })