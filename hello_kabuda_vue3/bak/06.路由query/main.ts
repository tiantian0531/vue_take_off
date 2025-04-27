/*
 * @Author: yu_xianglong yu_xianglong@qq.com
 * @Date: 2025-04-12 16:51:03
 * @LastEditors: yu_xianglong yu_xianglong@qq.com
 * @LastEditTime: 2025-04-26 12:03:32
 * @FilePath: \hello_kabuda_vue3\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由器
import router from './router'

const app = createApp(App);


app.use(router)


app.mount("#app");