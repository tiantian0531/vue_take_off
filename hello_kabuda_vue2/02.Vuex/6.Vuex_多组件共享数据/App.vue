<template>
  <div id="app">
    <Count />
    <hr>
    <Person />
  </div>
</template>

<script>
import Count from './components/count.vue'
import Person from './components/person.vue';

export default {
  name: 'App',
  components: {
    Count,
    Person
  },
  mounted() {
    console.log('App', this)
  }
}
</script>

<style></style>
