export const types = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}

export default {
    [types.LOGIN]: (state, { id, token }) => {
      state.user.id = id
      state.user.token = token
      state.authenticated = true
    },
    [types.LOGOUT]: (state) => {
      state.authenticated = false
    }
  }