const express = require ('express');
const { getCaController} = require('../controllers/caControllers');

const caRoute = express.Router();

caRoute.get('/',getCaController);
//Panneroute.get('/sum',sumPanneController);

module.exports = caRoute