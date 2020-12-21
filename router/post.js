// const express = require('express');

import express from 'express';
import axios from 'axios';
import posts from '../data/posts.js';

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', async (req, res) => {
    // hard-condig js
    res.send(posts);

    // data from jsonplaceholder
    // const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(result);

    // res.send(result.data);
});

// create api
router.post('/', function (req, res) {
    console.log(req.body);
    const newPost = {...req.body, id: posts.length + 1};
    // 데이터를 저장하자!!
    posts.push(newPost);
    
    res.send(newPost);
});

// module.exports = router;
export default router;