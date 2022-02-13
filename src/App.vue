<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <img
    alt="Vue logo"
    class="mx-auto"
    height="200"
    src="./assets/logo-large.png"
    srcset="./assets/logo-large.png 2x, ./assets/logo.png 1x"
    width="200"
  />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
