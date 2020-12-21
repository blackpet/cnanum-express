// const express = require('express')
// const postRouter = require('./router/post.js');
// const apiRouter = require('./router/api.js');

import express from 'express';
import postRouter from './router/post.js';
import apiRouter from './router/api.js';

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('public'));

// routers...
app.use('/post', postRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World! Ye~~~~!!!!!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});