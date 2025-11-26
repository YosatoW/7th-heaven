// src/routers/api.js

const express = require('express');
const router = express.Router();

const contactRouter = require('./contact');
const newsletterRouter = require('./newsletter');

router.use('/contact', contactRouter);
router.use('/newsletter', newsletterRouter);

module.exports = router;