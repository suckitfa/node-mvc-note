const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const router = express.Router()

const adminData = require('./admin')

router.get('/', (req, res, next) => {
    const products = adminData.products
    // res.sendFile(path.join(rootDir ,'views', 'shop.html'))
    res.render('shop',{
        products,
        docTitle: 'Shop'
    })
})

exports.routes = router