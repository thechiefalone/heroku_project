const express = require('express');
const adminRoute = express.Router();
const { MongoClient } = require('mongodb');
const authControllers = require('../controllers/authController');

//const dbUrl = 'mongodb+srv://admin:24320124@herokuapp-ohvst.mongodb.net/test?retryWrites=true'
const dbUrl = 'mongodb://localhost:27017';
const dbName ='herokuwebDB';

adminRoute.route('/').get((req,res)=>{
  res.render('admin');
})

adminRoute.route('/').post((req, res) => {
    authControllers.checkuser(req.body.email,(result)=>{
        if(!result){
        (async function mongo(){
            let client;
            try {
                client = await MongoClient.connect(dbUrl, { useNewUrlParser: true });
                const db = client.db(dbName);
                const response = await db.collection('users').insertOne({username: req.body.email, password: req.body.password});
                res.send(response);
            } catch (error) {
                res.send(error.message);
            }
            client.close();
        }());
    }else{
        res.send('sorry user is exist')
    }
    });

});

adminRoute.route('/changePassword').get((req,res)=>{
  res.render('changePassword');
})

adminRoute.route('/addNew').get((req,res)=>{
  res.render('addNew');
})


module.exports=adminRoute;
