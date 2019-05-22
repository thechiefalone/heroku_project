const express = require('express');
const adminRoute = express.Router();

adminRoute.route('/').get((req,res)=>{
    res.render('admin');
})

adminRoute.route('/register').get((req,res)=>{
    res.render('adminRegister');
})


module.exports=adminRoute;