const express = require('express');
const loginRoute = express.Router();


loginRoute.route('/').get((req,res)=>{
    res.render('login');
})

module.exports=loginRoute;