const express = require('express');
const adminRoute = express.Router();


adminRoute.route('/').get((req,res)=>{
    res.render('admin');
})


module.exports=adminRoute;