const express = require('express');
const Location = require('../models/Location');
const router = express.Router();

//Post Method
router.post('/save', async (req, res) => {
    const data = new Location({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// //Get all Method
router.get('/locations', async (req, res) => {
    try {
        const data = await Location.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;