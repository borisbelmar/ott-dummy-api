const express = require('express');
const Router = express.Router();
const Media = require('../models/Media');

Router.get('/', async (req, res) => {
    try {
        const data = await Media.find().sort({ publicId : 1 }).exec();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

Router.get('/limit/:limit', async (req, res) => {
    const { limit } = req.params;
    try {
        const data = await Media.find().sort({ publicId : 1 }).limit(parseInt(limit)).exec();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

Router.get('/limit/:limit/reverse', async (req, res) => {
    const { limit } = req.params;
    try {
        const data = await Media.find().sort({ publicId : -1 }).limit(parseInt(limit)).exec();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

Router.get('/skip/:skip', async (req, res) => {
    const { skip } = req.params;
    try {
        const data = await Media.find().sort({ publicId : 1 }).skip(parseInt(skip)).exec();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

Router.get('/:publicId', async (req, res) => {
    const { publicId } = req.params;
    try {
        const data = await Media.findOne({ publicId });
        data ? res.status(200).send(data) : res.sendStatus(404);
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