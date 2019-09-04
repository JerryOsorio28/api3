const express = require('express');

const server = express();

const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers.router');

//global middleware
server.use(express.json())

server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        api: "Api is up and running"
    })
})

module.exports = server;