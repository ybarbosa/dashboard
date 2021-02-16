const router = require('../router')
const create = require('./create')
const get = require('./findUsers')
const { body } = require('express-validator')

const validators = [
    body('email').isEmail(),
    body('name').isString(),
    body('password').isString().isLength({ min: 3 }),
    body('birthday').isDate("YYYY/MM/DD"),
]

router.get('/', get)
router.post('/create', validators , create)

module.exports = router