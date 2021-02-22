import { types as mutations } from './mutations'
import jwt from '../jwt'

export const types = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}

export default {
    [types.LOGIN]: async ({ commit }, { token }) => {
      const { id } = await jwt.login(token) 
      commit(mutations.LOGIN, { id, token })
    },
    [types.LOGOUT]: async ({ commit }) => {
        commit(mutations.LOGOUT)
    }
  }