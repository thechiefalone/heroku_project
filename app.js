const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res)=>{
res.render('index');
});

const aboutRoute = require('./src/routes/aboutRoute');
app.use('/about',aboutRoute);

const blogRoute = require('./src/routes/blogRoute');
app.use('/blog',blogRoute);

const contactRoute = require('./src/routes/contactRoute');
app.use('/contact',contactRoute);

const listingsSingleRoute = require('./src/routes/listingsSingleRoute');
app.use('/listings-single',listingsSingleRoute);

const registerRoute = require('./src/routes/registerRoute');
app.use('/register',registerRoute);

const loginRoute = require('./src/routes/loginRoute');
app.use('/login',loginRoute);





app.listen(port, () => {
    console.log(`App is listening on ${port}!`);
});
