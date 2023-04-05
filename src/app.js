// *******Require's ***
const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

// ********* Express/use *****
const app = express();

// *** Middlewares ******
app.use(express.static(path.join(__dirname,'public')));  // Para los archivos estaticos //
app.use(express.urlencoded({extended: false }));   // Con la linea 11 y 12, aclaramos que lo que llegue de un formulario
app.use(express.json());               // lo vamos a capturar en forma de Objeto Literal (para luego convertirlo en JSON), sin esto toda informacion de un formulario se pierde, salvo que se use express-generator. 
app.use(methodOverride('_method'));

// ****** sistemas de rutas *******
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');

app.use('/', mainRouter);
app.use('/products', productsRouter);  // Entregable Sprint 4

// ****** template Engine *****
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// ****** Creacion de Servidor *****
const port = 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})