<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="odd">当前求和为奇数</button>
    <button @click="incremmentWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      number: 1,//用户选择
      sum: 0, //求和

    }

  },
  methods: {
    increment() {
      this.sum += this.number
    },
    decrement() {
      this.sum -= this.number
    },
    odd() {
      if (this.sum % 2) {
        this.sum += this.number
      }
    },
    incremmentWait() {
      setTimeout(() => {
        this.sum += this.number
      }, 500)
    }
  }
}
</script>


<style scoped lang="css">
button {
  margin-left: 5px;
}

select {
  width: 200px;

}
</style>
