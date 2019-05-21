const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

const user = {
    username: 'alperen1123',
    password: 'ozkan1'
}


const MongoClient = require('mongodb').MongoClient;
//const dbUrl = 'mongodb+srv://admin:24320124@herokuapp-ohvst.mongodb.net/test?retryWrites=true'
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'prototypeDB';

const checkUser = require('./modules/checkUser');

app.get('/', (req, res) => {
    checkUser(user.username, (check) => {
        if (check) {
            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(dbUrl, {
                        useNewUrlParser: true
                    });
                    const db = client.db(dbName);
                    const response = await db.collection('users').insertOne(user);
                    res.send(response);
                } catch (error) {
                    res.send(error.message);
                }
                client.close();
            }());
        } else {
            res.send("user name is already exist please choose another one");
        }
    });
});

app.get('/show', (req, res) => {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const users = await col.find().toArray();
            res.json(users);
        } catch (error) {
            res.send(error.message);
        }
        client.close();
    }());
});

app.get('/user', (req, res) => {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const user = await col.findOne({
                username: 'alperen'
            });
            res.send(user);

        } catch (error) {
            res.send(error.message);
        }
        client.close();
    }());
})



app.listen(port, () => {
    console.log(`App is listening on ${port}!`);
});