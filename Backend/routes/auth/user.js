const db = require('../../db/infrastructure')
const dbName = 'users'
const { validationResult } = require('express-validator')
const { createUserToken } = require('../../plugins/jwt')
const bcrypt = require('bcryptjs')

const find = async (req, res) => {
    try {
		const error = await validationResult(req)
        if (!error.isEmpty()) {
            const erros = error.array().map(({ msg, param}) => ({ msg, param }))
            return res.status(422).send( erros )
        }
		
		const { email, password } = req.body
		
		const collection = await db(dbName)
		const user = await collection.findOne({ "email" : email })
		
		const comparePassword = bcrypt.compareSync( password, user.password)
		if (!comparePassword) {
			return res.status(406).send({ 'mensage': 'password invalid' })
		}

		const token = createUserToken(user._id)
		return res.status(200).send({ token: token })
	}
	catch (err) {
		return res.status(404).send({ ...err })
	}
}


module.exports = find