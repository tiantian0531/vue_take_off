export default {

    namespaced: true,
    //响应组件中的动作
    actions: {
        //context 是当前store上下文
        //value 是业务此次调用的参数
        oddincremment(context, value) {
            console.log('actions中的oddincremment被调用')
            if (context.state.sum % 2) {
                context.commit('ODDADD', value);
            }
        },
        incremmentwait(context, value) {
            console.log('actions中的incremmentWait被调用')
            setTimeout(() => {
                context.commit('ADDWAIT', value);
            }, 500)
        },

    },

    //用于操作数据
    mutations: {
        ADD(state, value) {
            console.log('mutations中的ADD被调用')
            console.log(value)
            state.sum += value
        },
        SUB(state, value) {
            console.log('mutations中的SUB被调用')
            state.sum -= value
        },
        ODDADD(state, value) {
            console.log('mutations中的ODDADD被调用')
            state.sum += value
        },
        ADDWAIT(state, value) {
            console.log('mutations中的ADDWAIT被调用')
            state.sum += value
        }

    },

    //用于存储数据
    state: {
        sum: 0,
        where: '家里',
        doWhat: 'Vue'
    },

    //加工state的数据
    getters: {
        calcSum(state) {
            return state.sum * 10 - 1
        }
    }
}
