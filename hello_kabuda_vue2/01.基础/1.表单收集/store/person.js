
export default {
    namespaced: true,
    //响应组件中的动作
    actions: {
        addPersonIsWang(context, value) {

            if (value.name.indexOf('王') === 0) {
                context.commit('ADDPERSON', value)
            } else {

                alert('添加人必须姓王')
            }

        }
    },

    //用于操作数据
    mutations: {
        ADDPERSON(state, person) {
            state.personList.unshift(person)
        }
    },

    //用于存储数据
    state: {
        personList: [
            {
                id: '001',
                name: '张三'
            }
        ]
    },

    //加工state的数据
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
