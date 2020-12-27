// const express = require('express')
// const postRouter = require('./router/post.js');
// const apiRouter = require('./router/api.js');

import express from 'express';
import hbs from 'express-handlebars';
import axios from 'axios';
import { db } from './service/firebase.js';

import postRouter from './router/post.js';
import apiRouter from './router/api.js';

import posts from './data/posts.js';

const app = express()
const port = 3000

app.set('view engine', 'hbs');
app.engine('hbs', hbs({ extname: 'hbs' }));

app.use(express.json());
app.use(express.static('public'));

// routers...
app.use('/post', postRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about', { menu: 'about' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { menu: 'contact234' });
});

app.get('/program', async (req, res) => {
    // get unsplash photos
    const result = await axios.get('https://api.unsplash.com/photos', {
        params: {
            client_id: 'smACiefvYhoo73pIord4kktIdFbNUDlROkf1igTfaHk'
        }
    });
    const photos = result.data;

    res.render('program', { menu: 'program', photos: photos });
});

app.get('/board', async (req, res) => {
    let posts = [];
    try {
        const snapshot = await db.collection('posts').orderBy('date', 'desc').get();
        let i = snapshot.size;
        snapshot.forEach((doc) => {
            const post = {id: doc.id, ...doc.data(), no: i--};
            if(post.date) {
                post.date = post.date.toDate().toLocaleString();
            }
            posts.push(post);
        });
        res.render('board', { posts: posts });
    } catch (err) {
        console.log('Error getting documents', err);
    }
});
app.post('/board', async (req, res) => {
    const data = {...req.body, date: new Date()};
    const newPost = await db.collection('posts').add(data);

    res.send({ id: newPost.id });
});
app.put('/board', async (req, res) => {
    const {title, content} = req.body;
    
    const data = {title, content, date: new Date()};
    const ref = db.collection('posts').doc(req.body.id);
    const newPost = await ref.update(data);

    res.send({ id: newPost.id });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});