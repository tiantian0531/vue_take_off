<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <H3>当前求和为:{{ calcSum }}</H3>
    <H3>我在{{ where }} 学习{{ doWhat }}</H3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="incremment">+</button>
    <button @click="decremment">-</button>
    <button @click="odd">当前求和为奇数</button>
    <button @click="incremmentWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  name: 'Count',
  data() {
    return {
      number: 1,//用户选择
      // sum: 0, //求和
    }
  },
  computed: {
    // 自己写属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // where() {
    //   return this.$store.state.where
    // },
    // doWhat() {
    //   return this.$store.state.doWhat
    // },

    // ...mapState({ sum: 'sum', where: 'where', doWhat: 'doWhat' }),
    ...mapState(['sum', 'where', 'doWhat']),
    // ...mapGetters({ calcSum: 'calcSum' })
    ...mapGetters(['calcSum'])
    // calcSum() {
    //   return this.$store.getters.calcSum
    // }
  },
  methods: {
    incremment() {

      this.$store.commit('ADD', this.number)
    },
    decremment() {
      // 没有业务逻辑直接在组建commit
      this.$store.commit('SUB', this.number)
    },
    odd() {
      this.$store.dispatch('oddincremment', this.number)
    },
    incremmentWait() {
      this.$store.dispatch('incremmentwait', this.number)
    }
  },
  mounted() {


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
