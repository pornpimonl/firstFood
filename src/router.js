import VueRouter from 'vue-router'
import Cart from './components/Cart.vue'
import List from './components/List.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'


const routes=[
    {path:'/cart',component: Cart},
    {path:'/',component: List},
    {path:'/login',component: Login},
    {path:'/register',component: Register},
    {path:'/profile',component: Profile},
]

const router = new VueRouter({
    routes:routes,
    mode:'history',
})

export default router