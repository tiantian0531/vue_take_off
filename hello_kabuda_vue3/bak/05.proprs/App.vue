

<template>
  <hello-world msg="合同申请流程" ref="a" a="哈哈" :list ="personList"/>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {reactive} from 'vue'
import { type Persons } from "./types"

let personList = reactive<Persons>([
    {id:'asudfysafd01',name:'张三',age:18},
    {id:'asudfysafd02',name:'李四',age:20},
    {id:'asudfysaf)d03',name:'王五',age:22}
  ])
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
