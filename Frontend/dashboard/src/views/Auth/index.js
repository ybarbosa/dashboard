import Oauth from './Entry.vue'

export default [
    {
        path: '/oauth',
        name: 'Auth',
        props: ({ query }) => ({ ...query }),
        component: Oauth,
        meta: {
            title: 'Autenticador'
        }
    }
]