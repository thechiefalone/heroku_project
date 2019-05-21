const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

const user ={
    username: 'alperen',
    password: 'ozkan'
}


const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb+srv://admin:24320124@herokuapp-ohvst.mongodb.net/test?retryWrites=true'
const dbname = 'prototypeDB';

app.get('/', (req,res)=>{
    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(dbUrl, {useNewUrlParser: true});
            const db = client.db(dbName);
            const response = await db.collection('users').insertOne(user);
            res.send(response);
        }catch(error){
            res.send(error.message);
        }
        client.close();
    }());
});


app.listen(port,()=>{
    console.log(`App is listening on ${port}!`);
});