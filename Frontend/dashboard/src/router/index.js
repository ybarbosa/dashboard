import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '../views'

Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'hash',
    routes: [
        ...Views
    ]
})

//router.beforeEach((to, from, next) => {})

export default router