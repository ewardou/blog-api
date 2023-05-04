const express = require('express');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json('index page');
});

app.listen(8000, () => {
    console.log('Server started on port 8000');
});
