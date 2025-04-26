<template>
    <h2 ref="title2">你好</h2>
    <button @click="showLog">测试</button>
  <div>
  </div>
  <hello-world msg="合同申请流程" ref="a"/>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
  import {ref} from 'vue'

var title = ref()
 var a = ref()
function showLog(){
  debugger
     console.log(title.value)
     a.value.updateMessage("hah");
    //console.log(ren.value)
  }
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
