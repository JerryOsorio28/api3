const express = require('express');

const router = express.Router();

//a router can have a middleware that applies ony to the router
router.use(express.json());

// This router handles url's that begin with /products
// GET to /products/
router.get('/', (req, res) => {
    res.send('get to /products/')
})

// GET to /products/:id
router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`get to /products/${name}`)
})

module.exports = router;
