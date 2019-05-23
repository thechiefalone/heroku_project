const express = require('express');
const adminRoute = express.Router();
const { MongoClient } = require('mongodb');

//const dbUrl = 'mongodb+srv://admin:24320124@herokuapp-ohvst.mongodb.net/test?retryWrites=true'
const dbUrl = 'mongodb://localhost:27017';
const dbName ='herokuwebDB';

adminRoute.route('/').get((req,res)=>{
    res.render('admin');
})

adminRoute.route('/register').get((req,res)=>{
    res.render('adminRegister');
})

adminRoute.route('/register').post((req, res) => {
    
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
});


module.exports=adminRoute;