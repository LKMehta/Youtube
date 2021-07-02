const mongoose = require('mongoose');

const {Schema} = mongoose;

const youtubeSchema = new Schema(
    {
        url: {type:String},
        timestamp: {type:Date},
    }
);

module.exports = mongoose.models.YouTube || mongoose.model('YouTube', youtubeSchema)
