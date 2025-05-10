<template>
  <div id="app">

    <Count />
  </div>
</template>

<script>
import Count from './components/count.vue'

export default {
  name: 'App',
  components: {
    Count
  },
  mounted() {
    console.log('App', this)
  }
}
</script>

<style></style>
