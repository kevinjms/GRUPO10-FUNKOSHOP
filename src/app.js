const express = require('express');
const mainRoutes = require('./routers/main')

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);


 app.post('/register', (req, res) => {
    res.redirect('/')
})

const port = 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})