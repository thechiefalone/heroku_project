const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');


const port = process.env.PORT || 3000;

app.use(session({
    secret: "classyadd",
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, '/public')));

const pageRoutes = require('./src/routes/pageRoutes');
const adminRoute = require('./src/routes/adminRoute');
const authRoutes = require('./src/routes/authRoutes');

app.use('/',pageRoutes);
app.use('/admin',adminRoute);
app.use('/auth',authRoutes );



app.listen(port, () => {
    console.log(`App is listening on ${port}!`);
});
