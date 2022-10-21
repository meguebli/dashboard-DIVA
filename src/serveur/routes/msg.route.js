const express = require ('express');
const { getMsgController} = require('../controllers/msg.controller');

const msgRoute = express.Router();

msgRoute.get('/',getMsgController);
//Panneroute.get('/sum',sumPanneController);

module.exports = msgRoute