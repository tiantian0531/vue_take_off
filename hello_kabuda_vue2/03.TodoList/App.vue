<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodoItem="addTodoItem" @addTodo="addTodoItem" />
                <MyList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo" />
                <MyFooter :todos="todos" :allTodo="allTodo" :clearAllTodo="clearAllTodo" />
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter.vue'
export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
            // todos: [
            // { id: '001', title: '工作', done: true },
            // { id: '002', title: '学习', done: false },
            // { id: '003', title: '开车', done: true }
            // ]

            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
        // 添加todo
        addTodoItem(item) {
            this.todos.unshift(item);
        },
        // 选择todo 
        checkTodo(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.done = !todo.done
                    console.log(todo)
                }
            })
        },
        // 删除todo 
        delTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        allTodo(done) {
            this.todos.forEach((todo) => {
                todo.done = done
            })
        },
        clearAllTodo() {

            this.todos = this.todos.filter((todo) => {
                return !todo.done
            })
        }
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }

    },
    mounted() {
        console.log('App', this)
    },

}
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
