const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 9001
const HOST = '0.0.0.0'

const { auth, users } = require('./routes')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', auth)
app.use('/users', users)

app.listen(PORT, HOST, () => {
    console.log('Listening PORT 9001')
})