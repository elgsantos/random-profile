const express = require('express');

const routes = new express.Router();

routes.get('/', (req, res) => { return res.json('Random profile generator'); })

module.exports = routes;