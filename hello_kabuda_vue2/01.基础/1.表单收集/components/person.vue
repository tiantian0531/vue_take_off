<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件求和为：{{ sum }}</h3>

        <h3 style="color:green">列表中第一个人的名字是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addwang">添加指定人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>

    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.b.personList;
        },
        sum() {
            return this.$store.state.a.sum;
        },
        firstPersonName() {

            return this.$store.getters['b/firstPersonName']
        }
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('b/ADDPERSON', personObj);
            this.name = ''
        },
        addwang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('b/addPersonIsWang', personObj);
            this.name = ''

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