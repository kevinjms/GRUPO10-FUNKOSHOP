const express = require('express');
const mainRoutes = require('./routers/main')

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);

// app.get('/', (req, res) =>{
//     res.render(path.join(__dirname,'index'))
// });

// app.get('/detalle-de-producto', (req, res) =>{
//     res.render(path.join(__dirname,'detalle-de-producto'))
// });

// app.get('/carrito-de-compras', (req, res) =>{
//     res.render(path.join(__dirname,'carrito-de-compras'))
// });

// app.get('/formulario-de-registro', (req, res) => {
//     res.sendFile(path.join(__dirname,'/views/register.html'))
// });

// app.post('/formulario-de-registro', (req, res) => {
//     res.redirect('/')
// })

// app.get('/formulario-de-login', (req, res) => {
//     res.sendFile(path.join(__dirname,'/views/formulario-de-login.html'))
// });

// app.post('/formulario-de-login', (req, res) => {
//     res.redirect('/')
// })

const port = 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})