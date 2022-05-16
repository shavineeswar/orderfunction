const express = require('express');
const router = express.Router();
const order_Controller = require('../controller/order.controller');


module.exports = function () {
   
    router.post('/saveorder', order_Controller.Createorder);
    
    return router;
}