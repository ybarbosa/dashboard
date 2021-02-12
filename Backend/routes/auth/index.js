const router = require('express').Router()
const db = require('../../db/infrastructure')
const dbName = 'users'
router.get('/', async (_, res) => {
    try {
		const collection = await db(dbName)
		const users = await collection.find({}).toArray()
		return res.status(200).json(users)
	}
	catch {
		return res.status(404).send(err)
	}
})



module.exports = router