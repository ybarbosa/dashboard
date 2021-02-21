import SignIn from './Entry.vue'

export default [
    {
        path: '/',
        name: 'SignIn',
        props: ({ query }) => ({ ...query }),
        component: SignIn,
        meta: {
            title: 'Login'
        }
    }
]