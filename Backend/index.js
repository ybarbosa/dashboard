const app = require('express')()
const cors = require('cors')
const PORT = 9001
const HOST = '0.0.0.0'
const { auth, users } = require('./routes')

app.use(cors())
app.use('/auth', auth)
app.use('/user', users)

app.listen(PORT, HOST, () => {
    console.log('Listening PORT 9001')
})