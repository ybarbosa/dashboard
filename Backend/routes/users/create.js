const { validationResult } = require('express-validator')
const db = require('../../db/infrastructure')
const dbName = 'users'
const crypt = require('../../plugins/bcrypt')
const timeStamp = require('../../plugins/timeStamp')
const { createUserToken } = require('../../plugins/jwt')
const create = async (req, res) => {
    try {
        const { password, birthday, email, name } = req.body
        const error = await validationResult(req)
        
        if (!error.isEmpty()) {
            const erros = error.array().map(({ msg, param}) => ({ msg, param }))
            return res.status(422).send( erros )
        }
        
        const collection = await db(dbName)
        
        const modelUser = {
            name,
            email,
            password: await crypt(password),
            birthday: timeStamp(birthday, 'YYYY/mm/DD').format('LL'),
            createdAt: timeStamp().format('LL')
        }
        
        await collection.insertOne(modelUser)
        const token = createUserToken(modelUser._id)
        return res.status(201).send( { token } )
    } catch (err) {
        return res.status(404).send(err)
    }
}

module.exports = create