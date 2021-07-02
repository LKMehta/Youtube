const mongoose = require('mongoose');

const {Schema} = mongoose;

const youtubeSchema = new Schema(
    {
        url: {type:String},
        timestamp: {type:Date, default: new Date()},
    }
);

module.exports = mongoose.model('YouTube', youtubeSchema)