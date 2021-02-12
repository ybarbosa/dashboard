import SignUp from './Entry.vue'

export default [
    {
        path: '/signup',
        name: 'SignIn',
        props: ({ query }) => ({ ...query }),
        component: SignUp,
        meta: {
            title: 'Login'
        }
    }
]