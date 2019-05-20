const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('I am Alperen and welcome to my Heroku Project')
});


app.listen(port,()=>{
    console.log(`App is listening on ${port}!`);
});