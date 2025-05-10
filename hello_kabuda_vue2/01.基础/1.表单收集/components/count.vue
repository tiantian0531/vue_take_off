<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <H3>当前求和为:{{ calcSum }}</H3>
    <H3>我在{{ where }} 学习{{ doWhat }}</H3>
    <h3>总人数为:{{ personList.length }}</h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="incremment(number)">+</button>
    <button @click="decremment(number)">-</button>
    <button @click="odd(number)">当前求和为奇数</button>
    <button @click="incremmentWait(number)">等一等再加</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { mapMutations } from 'vuex';
export default {
  name: 'Count',
  data() {
    return {
      number: 1,//用户选择
      // sum: 0, //求和
    }
  },
  computed: {
    // ...mapState({ sum: 'sum', where: 'where', doWhat: 'doWhat' }),
    ...mapState('a', ['sum', 'where', 'doWhat']),
    ...mapState('b', ['personList']),
    // ...mapGetters({ calcSum: 'calcSum' })
    ...mapGetters('a', ['calcSum'])

  },
  methods: {

    // incremment() {
    //   this.$store.commit('ADD', this.number)
    // },
    // decremment() {
    //   // 没有业务逻辑直接在组建commit
    //   this.$store.commit('SUB', this.number)
    // },
    ...mapMutations('a', { incremment: 'ADD', decremment: 'SUB' }),
    // ...mapMutations([ 'ADD','SUB']),


    // odd() {
    //   this.$store.dispatch('oddincremment', this.number)
    // },
    // incremmentWait() {
    //   this.$store.dispatch('incremmentwait', this.number)
    // }
    ...mapActions('a', { odd: 'oddincremment', incremmentWait: 'incremmentwait' })
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
