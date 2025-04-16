<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温：{{temp}}℃</h2>
    <h2>当前水位：{{height}}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>
<script setup lang="ts">
import {  ref, watchEffect } from 'vue'

  let temp = ref(10)
  let height = ref(0)

  // 方法
  function changeTemp(){
    temp.value += 10
  }
  function changeHeight(){
    height.value += 10
  }

  watchEffect(()=>{
    if(temp.value >= 60 || height.value >= 80){
      console.log('给服务器发请求')
    }
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
