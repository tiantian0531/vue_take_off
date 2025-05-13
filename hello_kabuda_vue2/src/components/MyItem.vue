<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <!-- 不建议直接改props传入的数据,如果值类型就会报错,引用的可以实现 -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo', 'checkTodo', 'delTodo'],
    methods: {
        handleCheck(id) {
            debugger
            this.checkTodo(id)
        },
        handleDel(id) {
            this.delTodo(id)
        }
    },
    computed: {


    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>