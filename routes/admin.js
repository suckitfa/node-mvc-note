const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
   res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

router.post('/product', (req, res, next) => {
    console.log('req.body = ', req.body)
    res.redirect("/")
})

router.get('/', (req,res,next) => {
    res.send('<h1>Admin Main Page</h1>')
})

module.exports = router