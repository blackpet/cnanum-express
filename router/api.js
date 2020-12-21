// const express = require('express');
// const posts = require('../data/posts.js');

import express from 'express';

const router = express.Router();


router.post('/json-data', (req, res) => {
    res.send('{"key1":1, "key2":"abc"}');
});


// module.exports = router;
export default router;
