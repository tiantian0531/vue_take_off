<template>
  <div id="app">
    <!-- <Count />
    <hr>
    <Person /> -->

    <form @submit.prevent="demo">
      账号：<input type="text" v-model.trim="userInfo.account"> <br /><br />
      密码：<input type="password" v-model="userInfo.password"> <br /><br />
      年龄：<input type="number" v-model.number="userInfo.age"> <br /><br />
      性别：
      男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
      女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br /><br />
      爱好：
      学习<input type="checkbox" v-model="userInfo.hobby" value="study">
      打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
      吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
      <br /><br />
      所属校区
      <select v-model="userInfo.city">
        <option value="">请选择校区</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="shenzhen">深圳</option>
        <option value="wuhan">武汉</option>
      </select>
      <br /><br />
      其他信息：
      <textarea v-model.lazy="userInfo.other"></textarea> <br /><br />
      <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
      <button>提交</button>
    </form>
  </div>

</template>

<script>
// import Count from './components/count.vue'
// import Person from './components/person.vue';

export default {
  name: 'App',
  components: {
    // Count,
    // Person
  },
  data() {
    return {
      userInfo: {
        account: '',
        password: '',
        age: 18,
        sex: 'female',
        hobby: [],
        city: 'beijing',
        other: '',
        agree: ''
      }

    }

  },
  methods: {
    demo() {
      console.log(JSON.stringify(this.userInfo))
    }
  },

  mounted() {
    console.log('App', this)
  }
}
</script>

<style></style>
