<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- 因为isAll是自己的属性 -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos', 'allTodo', 'clearAllTodo'],
    computed: {
        //总数
        total() {
            return this.todos.length
        },
        doneTotal() {
            return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        },
        isAll: {
            get() {
                return this.doneTotal === this.total && this.total > 0
            },
            set(value) {
                this.allTodo(value)
            }

        }
    },
    methods: {

        //清空所有已完成
        clearAll() {
            this.clearAllTodo()
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