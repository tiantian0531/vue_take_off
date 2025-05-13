<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" />
        </label>
        <span>
            <span>已完成</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        //总数
        total() {
            return this.todos.length
        },
    },
    methods: {
        /* checkAll(e){
            this.checkAllTodo(e.target.checked)
        } */
        //清空所有已完成
        clearAll() {
            // this.clearAllTodo()
            this.$emit('clearAllTodo')
        }
    },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>