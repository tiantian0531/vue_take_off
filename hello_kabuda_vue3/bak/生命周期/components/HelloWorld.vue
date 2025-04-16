<template>
  <h1>{{ msg }}</h1>
  <h1 v-if="isVisible">1123</h1>
  <div class="card">
    <button type="button" @click=countSum>count is {{ count }}</button>
    <li v-for="game in games" @click=liClick(game) :key="game.id">{{ game.name }}</li>
    <button type="button" @click=changeGames()>改变li</button>
    <button type="button" @click=switchVisible()>显示隐藏</button>
  </div>

</template>
<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue'

interface Game {
  id: number;
  name: string;
}
defineProps<{ msg: string }>()
const count = ref(0)

let games = reactive<Game[]>([
  { id: 1, name: "A1" },
  { id: 2, name: "A2" },
  { id: 3, name: "A3" }
])

function countSum() {
  count.value++
}

function changeGames() {

  let index = games.length + 1; // 计算新的 id
  games.push({ id: index, name: "A" + index })
}

function liClick(params: Game) {
  debugger
  console.log(params)
  console.log(params.id)
  console.log(params.name)
}

let isVisible= ref(true)
function switchVisible()
{
  isVisible.value =!isVisible.value
}
onBeforeMount(() => {
  console.log("挂载前")
})
onMounted(() => {
  console.log("挂载完成")
})

onBeforeUpdate(() => {
  console.log("更新前")
})
onUpdated(() => {
  console.log("刚更新完")
})

onBeforeUnmount(()=>{
  console.log("卸载前")
})

onUnmounted(()=>{
  console.log("卸载完")
})
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
