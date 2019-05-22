const express = require('express');
const registerRoute = express.Router();


registerRoute.route('/').get((req,res)=>{
    res.render('register');
})

module.exports=registerRoute;