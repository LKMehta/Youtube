const Youtube = require('../models/youtubeModel');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/youtube')
export default async function youtube(req, res) {
    if (req.method == "POST") {
        let data = {
            url: req.body.youTubeUrl
        }
        const youtube = new Youtube(data)
        youtube.save() 
        res.status(201).json(youtube)
    }
    if (req.method == "GET") {
        try {
            const youtubeData = await Youtube.find({})
            if (youtubeData) {
                youtubeData.sort(sortInDescOrder)
                res.json(youtubeData[0])
            }
        }
        catch (error) {
            res.json(error)
        }
    }

}

function sortInDescOrder(a, b) {
    if (a.timestamp < b.timestamp) {
        return 1;
    }
    if (a.timestamp > b.timestamp) {
        return -1;
    }
    return 0;
}
