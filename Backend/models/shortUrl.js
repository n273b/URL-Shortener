const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true, 
        unique: true
    },
    redirectUrl : {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)