const app = require('express')()
const cors = require('cors')
const PORT = 9001
const HOST = '0.0.0.0'

app.use(cors())
app.listen(PORT, HOST, () => {
    console.log('Listening PORT 9001')
})