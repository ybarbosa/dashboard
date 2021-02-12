const MongoClient = require('mongodb').MongoClient
const urlDb = "mongodb+srv://users:user@cluster0.2olhd.mongodb.net/<dbname>?retryWrites=true&w=majority"

const db =  async (dbName) => {
	const db = await MongoClient.connect(urlDb, { useUnifiedTopology: true } )
	const collection = await db.db("dashboard")
	return collection.collection(dbName)
}

module.exports =  db