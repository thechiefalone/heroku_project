const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname, '/public')));

const pageRoutes = require('./src/routes/pageRoutes');
const adminRoute = require('./src/routes/adminRoute');

app.use('/',pageRoutes);
app.use('/admin',adminRoute);
app.use('/admin/register',adminRoute);



app.listen(port, () => {
    console.log(`App is listening on ${port}!`);
});
