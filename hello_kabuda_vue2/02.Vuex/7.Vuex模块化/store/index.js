//创建vuex的store
import Vue from 'vue'
import Vuex from "vuex"
import countOptions from './count';
import personOptions from './person'
Vue.use(Vuex);



//创建并且暴露导出store
export default new Vuex.Store({

    modules: {
        a: countOptions,
        b: personOptions
    }
    // actions: actions,
    // mutations: mutations,
    // state: state,
    // getters: getters
})
