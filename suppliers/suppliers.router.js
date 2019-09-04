const express = require('express');
const router = express.Router();

//Custom middleware that returns a name upper cased.
function upperCase(req, res, next){
    let name = req.params.name;
    if (name){
        req.name = name.toUpperCase();
    }
    next();
}

router.use(express.json());

router.get('/', (req, res) => {
    res.send('get to /suppliers')
})

router.get('/:name', upperCase, (req, res) => {
    res.send(`get to /suppliers/${req.name}`)
})

module.exports = router;