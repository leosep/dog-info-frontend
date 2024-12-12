<template>
  <div id="app">
    <BreedGrid />
  </div>
</template>

<script lang="ts">
import BreedGrid from './components/BreedGrid.vue';

export default {
  name: 'App',
  components: { BreedGrid },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 2rem auto;
  max-width: 1200px;
}
</style>
