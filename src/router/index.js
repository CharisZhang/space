import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Sort from '@/components/sort/sort'
import Add from '@/components/add/add'
import Find from '@/components/find/find'
import Mine from '@/components/mine/mine'
import Signin from '@/components/sign/signin'
import Signup from '@/components/sign/signup'

Vue.use(Router)

const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/sort', component: Sort},
    {path: '/add', component: Add},
    {path: '/find', component: Find},
    {path: '/mine', component: Mine},
    {path: '/login', component: Signin},
    {path: '/join', component: Signup},
]

export default new Router({
	routes: routes
})