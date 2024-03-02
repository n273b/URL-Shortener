const mongoose = require('mongoose')
const shortId =require('shortid')
shortId.generate()

const shortUrlSchema = new mongoose.Schema({
    short: {
        type: String,
        required: true, 
        unique: true
    },
    redirect : {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)