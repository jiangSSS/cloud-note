import Vue from 'vue'
import Router from 'vue-router'

import Nprogress from "nprogress"
import "nprogress/nprogress.css"

import Layout from '@/components/Layout.vue'
import register from "@/views/register.vue"
import writeNote from "@/views/writeNote.vue"
import index from "@/views/index.vue"
import article from "@/views/article.vue"

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:"/index",
      children:[
        {
          path:"/index",
          name:"index",
          meta:{
            title:"我是首页"
          },
          component:index
        },
        {
          path:"/register",
          name:"register",
          component:register
        },
        {
          path:"/writeNote",
          name:"writeNote",
          component:writeNote
        },
        {
          path:"/article/:id",
          name:"article",
          component:article
        } 
      ]
    }  
  ]
})
router.beforeEach((to,from,next)=>{  //进度条加载
  Nprogress.start();
  next();
})
router.afterEach((to,from)=>{
  Nprogress.done();
})

export default router

