const {
    MongoClient
} = require('mongodb');

//const dbUrl = 'mongodb+srv://admin:24320124@herokuapp-ohvst.mongodb.net/test?retryWrites=true'
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'herokuwebDB';

function checkUser(email,password, done) {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const col = await db.collection('users');
            const user = await col.findOne({
                username: email,
                password: password
            });
            client.close();
            done( user);
        } catch (error) {
            console.log(error.message);
            client.close();
            done(null);
        }

    }());
}

function addUser(email, password, callback) {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(dbUrl, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const user = await db.collection('users').findOne({
                username: email
            });
            if (user) {
                client.close();
                callback(false)
            } else {
                const response = await db.collection('users').insertOne({
                    username: email,
                    password: password
                });
                // console.log(response);
                client.close();
                callback(true);
            }
        } catch (error) {
            client.close();
            callback(false);
        }

    }());
}


module.exports = {
    checkUser,
    addUser
};
