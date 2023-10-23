const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')
const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {pageTitle:'Add Product'})
})

router.post('/product', (req, res, next) => {
    products.push({
        title: req.body.title,
    })
    res.redirect("/shop")
})

router.get('/', (req, res, next) => {
    res.send('<h1>Admin Main Page</h1>')
})

exports.routes = router
exports.products = products