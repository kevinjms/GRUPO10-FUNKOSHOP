const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/carrito-de-compras', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/carrito-de-compras.html'))
})


const port = 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})