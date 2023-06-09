const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRouter = require('./routes/postRoute');
require('dotenv').config();
require('./passport');

const auth = require('./routes/authRoute');

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
mongoose.connection.on(
    'error',
    console.error.bind(console, 'mongo connection error')
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', auth);
app.use('/posts', postRouter);

app.listen(8000, () => {
    console.log('Server started on port 8000');
});
