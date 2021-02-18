const router = require('../express')
const findUser = require('./user')
const { body } = require('express-validator')

router.post('/', 
	body('email').exists().isEmail(),
	body('password').exists().isString(),
	findUser
)

module.exports = router