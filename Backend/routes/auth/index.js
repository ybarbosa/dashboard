const router = require('../express')
const findUser = require('./findUser')
const { body } = require('express-validator')

router.post('/', 
	body('email').exists().withMessage('campo Obrigatorio').isEmail(),
	findUser,
	(req,res) => {
		console.log(req.token)
	}
)

module.exports = router