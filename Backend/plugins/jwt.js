const jwt = require('jsonwebtoken')

const createUserToken = (user) => {
	return jwt.sign({ id : user }, 'xuxinha', { expiresIn: 1 })
}

const auth = async (req, res, next) => {
    try {
        const tokenHeader = req.headers.auth
        if(!tokenHeader) return res.status(401).send( { error: 'token not sent' } )
        
        const token = await jwt.verify( tokenHeader, 'xuxinha')
        req.token = token
        return next()
    } catch (error) {
        //  
        return res.status(401).send( { error: error.message } )
    }
}

module.exports = {
    createUserToken,
    auth,
    jwt
}