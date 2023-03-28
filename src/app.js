// *******Require's ***
const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

// ********* Express/use *****
const app = express();

// *** Middlewares ******
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));

// ****** sistemas de rutas *******
const mainRoutes = require('./routers/main')
const productsRoutes = require('./routers/products')

app.use('/', mainRoutes);
app.use('/products', productsRoutes);

// ****** template Engine *****
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.post('/register', (req, res) => {
    res.redirect('/')
})

const port = 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})