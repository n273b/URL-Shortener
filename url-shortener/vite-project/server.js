// import express from 'express';

const express = require('express')
const mongoose = require('mongoose');
const app = express()

const path = require('path')

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

// Route for handling requests to the .jsx file

app.get('/', (req, res) => {
    res.render
})

app.listen(process.env.PORT || 5000)