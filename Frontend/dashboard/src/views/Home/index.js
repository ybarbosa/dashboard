import Home from './Entry.vue'

export default [
    {
        path: '/',
        name: 'Home',
        props: ({ query }) => ({ ...query }),
        component: Home,
        meta: {
            title: 'Inicio'
        }
    }
]