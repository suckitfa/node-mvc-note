const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const adminData = require('./routes/admin')
const shopData = require('./routes/shop')

const app = express()

// config the template engin
app.set('view engine','pug')
app.set('views','views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/admin', adminData.routes)
app.use('/shop', shopData.routes)

app.use('/*', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
  
app.listen(3000)