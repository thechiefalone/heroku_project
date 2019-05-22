const express = require('express');
const listingsSingleRoute = express.Router();


listingsSingleRoute.route('/').get((req,res)=>{
    res.render('listings-single');
})

module.exports=listingsSingleRoute;