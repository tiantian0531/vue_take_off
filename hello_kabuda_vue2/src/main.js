//����Vue
import Vue from 'vue'
//����App
import App from './App.vue'
//�ر�Vue��������ʾ
Vue.config.productionTip = false

//����vm
new Vue({
	el: '#app',
	render: h => h(App),
	/* mounted() {
		setTimeout(()=>{
			this.$destroy()
		},3000)
	}, */
})