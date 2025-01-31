<!-- <template>
  <standardResume />
  <modernResume />
</template>

<script lang="ts">
import standardResume from "./components/standard/resume.vue"
import modernResume from "./components/modern/resume.vue"


export default {
  name: "App",
  components: {
    standardResume,
    modernResume,
  },
};
</script>

<style>
html, body {
  font-family:'Courier New', Courier, monospace;
  overflow-x: hidden;
  background-color: #fff;
}
.overflow-auto::-webkit-scrollbar {
    display: none;
  }
</style> -->


<template>
  <div id="app">
    <router-view></router-view> <!-- This is where the routed components will be displayed -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html, body {
  font-family:'Courier New', Courier, monospace;
  overflow-x: hidden;
  background-color: #fff;
}
.overflow-auto::-webkit-scrollbar {
    display: none;
  }
</style>
