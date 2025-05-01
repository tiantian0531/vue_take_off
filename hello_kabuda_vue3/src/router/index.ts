// 第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import News from "../components/News.vue";
import About from "../components/About.vue";
import Detail from "../pages/detail.vue";

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式（稍后讲解）
  routes: [
    //一个一个的路由规则
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name:"xiang",
          path: "detail/:id/:title/:content",
          component: Detail,
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});

// 暴露出去router
export default router;
