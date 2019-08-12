const express = require('express');
const DevController = require('./controllers/DevController');
const routes = express.Router();

routes.post('/devs',  DevController.stroe);

module.exports = routes;