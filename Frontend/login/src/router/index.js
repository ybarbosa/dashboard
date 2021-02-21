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

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title
    })
})

export default router