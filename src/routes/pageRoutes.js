const express = require('express');
const pageRoutes = express.Router();

pageRoutes.route('/about').get((req,res)=>{
    res.render('about');
})

pageRoutes.route('/blog').get((req,res)=>{
    res.render('blog');
})

pageRoutes.route('/contact').get((req,res)=>{
    res.render('contact');
})

pageRoutes.route('/listings-single').get((req,res)=>{
    res.render('listings-single');
})

pageRoutes.route('/listings').get((req,res)=>{
    res.render('listings');
})

pageRoutes.route('/login').get((req,res)=>{
    res.render('login');
})

pageRoutes.route('/register').get((req,res)=>{
    res.render('register');
})

pageRoutes.route('/').get((req,res)=>{
    res.render('index');
})


module.exports=pageRoutes;