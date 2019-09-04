const express = require('express');

const server = express();

const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers.router');

//global middleware
server.use(express.json())

//implementing express routers
server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)

//routes handlers
server.get('/', (req, res) => {
    res.status(200).json({
        api: "Api is up and running"
    })
})


//exporting default server
module.exports = server;