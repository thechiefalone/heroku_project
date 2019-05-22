const express = require('express');
const blogRoute = express.Router();


blogRoute.route('/').get((req,res)=>{
    res.render('blog');
})

module.exports=blogRoute;