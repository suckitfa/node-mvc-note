const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

app.use((req, res, next) => {
    res.status(404).end('<h1>Page Not Found</h1>')
})

app.listen(3000)