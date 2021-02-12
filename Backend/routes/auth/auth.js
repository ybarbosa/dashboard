const { jwt } = require('../../plugins/jwt')

const auth = (req,res, next) => {
    const tokenHeader = req.headers.auth

    if(!tokenHeader) return res.status(401).send( { error: 'token not sent' } )

    jwt.verify( tokenHeader, 'xuxinha' ,(err, decoded) => {
        if(err) return res.status(404).send( { error: 'token invalid' } )
    })
    return next()
}


module.exports = {
    auth
}