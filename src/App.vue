<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> 和
    <router-link :to="{ name: 'About'}">About_2</router-link>
    兩種寫法功能相同
    第二種寫法 更改連結時不需要更動其他地方
    -->
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'About'}">About_2</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view/>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'Home'})
      },
      back() {
        this.$router.go(-1)
      },
      forward() {
        this.$router.go(1)
      }
    },
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
button {
  margin:0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
