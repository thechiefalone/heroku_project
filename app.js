const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, '/public')));

const pageRoutes = require('./src/routes/pageRoutes');

app.use('/',pageRoutes);
app.use('/about',pageRoutes);
app.use('/blog',pageRoutes);
app.use('/contact',pageRoutes);
app.use('/listings-single',pageRoutes);
app.use('/listings',pageRoutes);
app.use('/register',pageRoutes);
app.use('/login',pageRoutes);





app.listen(port, () => {
    console.log(`App is listening on ${port}!`);
});
