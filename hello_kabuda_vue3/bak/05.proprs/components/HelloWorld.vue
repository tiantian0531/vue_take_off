
<template>
  <div>{{parentValue}}</div>
<ul >
  <li v-for=" i in parentValue.list">
    {{i.id}}--{{ i.name }}--{{ i.age }}
  </li>
</ul>

</template>
<script setup lang="ts">
import { onMounted, type Reactive } from 'vue';
import { type Persons } from "../types"

var parentValue = defineProps(['a','list'])

onMounted(()=>{
  console.log(parentValue.a)
})

</script>


<style scoped>
.read-the-docs {
  color: #888;
}
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>
