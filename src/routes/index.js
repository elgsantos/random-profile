const express = require('express');
const ProfileController = require('../controllers/ProfileController');

const routes = new express.Router();

routes.get('/', ProfileController.index);

module.exports = routes;