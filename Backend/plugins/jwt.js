const jwt = require('jsonwebtoken')

const createUserToken = (user) => {
	return jwt.sign({ id : user }, 'xuxinha', {expiresIn: '7d'} )
}

module.exports = {
    createUserToken,
    jwt
}