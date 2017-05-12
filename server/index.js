const express = require('express');
const getProducts = require('./db');

const app = express();
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send('Server is running!!!'));

app.get('/products/:idMax', (req, res) => {
    const { idMax } = req.params;
    getProducts(idMax, (err, result) => {
        if (err) return res.send(err);
        res.send(result);
    });
});
