const db = require('../../db/infrastructure')
const dbName = 'users'
const { createUserToken, jwt } = require('../../plugins/jwt')

const find = async (req, res, next) => {
    try {
        const { email } = req.body
		const collection = await db(dbName)
		const user = await collection.findOne({ "email" : email })
		const token = createUserToken(user._id)
		req.token = token
		//return res.status(200).json({ userId: user._id, token })
		next()
	}
	catch (err) {
		return res.status(404).send(err)
	}
}


module.exports = find