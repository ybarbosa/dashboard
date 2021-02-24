import { types as mutations } from './mutations'
import auth from '../auth'

export const types = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}

export default {
    [types.LOGIN]: async ({ commit }, { token }) => {
      const { id } = await auth.login(token) 
      commit(mutations.LOGIN, { id, token })
    },
    [types.LOGOUT]: async ({ commit }) => {
        commit(mutations.LOGOUT)
    }
  }