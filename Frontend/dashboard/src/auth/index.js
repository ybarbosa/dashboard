import jwt from 'jsonwebtoken'
import localForage from 'localforage'

const login = async (token) => {
    const { id } = jwt.decode(token)
    await localForage.setItem('token', token)
    console.log('bateu')
    return { id, token }
}

const logout = async () => {
    await localForage.removeItem('token')
}

const isValid = async () => {
    const token = localForage.getItem('token')

    if ( !token ) {
        return false
    }

    return true
}
export default {
    login,
    logout,
    isValid
}