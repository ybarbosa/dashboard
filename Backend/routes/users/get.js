const db = require('../../db/infrastructure')
const dbName = 'users'


const get = async (_, res) => {
    try {
		const collection = await db(dbName)
		const users = await collection.find({}).toArray()
		return res.status(200).json(users)
	}
	catch (err) {
		return res.status(404).send(err)
	}
}


module.exports = get