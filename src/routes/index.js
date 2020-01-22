const express = require('express');
const Router = express.Router();
const Media = require('../models/Media');

Router.get('/', async (req, res) => {
    try {
        const data = await Media.find();
        res.status(200).send(data);
    } catch(err) {
        res.status(500).send(err);
    }
})

Router.get('/:publicId', async (req, res) => {
    const { publicId } = req.params;
    try {
        const data = await Media.find({ publicId });
        res.status(200).send(data);
    } catch(err) {
        res.status(500).send(err);
    }
})

Router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMedia = new Media(data);
        const result = await newMedia.save();
        res.status(200).send(result);
    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = Router;