// import express from 'express';

const express = require('express')
const mongoose = require('mongoose');
const app = express()
const ShortUrl = require('./models/shortUrl')

const path = require('path')

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

// Route for handling requests to the .jsx file
app.get('/', (req, res) => {
    res.sendFile('./url-shortener/vite-project/src/main.jsx', { root: __dirname })
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server has started in port: ${PORT}`)
})