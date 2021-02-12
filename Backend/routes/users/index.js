const router = require('../router')
const create = require('./create')

router.get('/create', create)

module.exports = router