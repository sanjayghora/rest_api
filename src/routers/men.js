const express = require('express');
const router = new express.Router();

const MensRanking = require("../models/userModel");

// app.get('/', async (req, res) =>{
//     res.send('Hello sanjay');
// })

router.post("/mens", async (req, res) => {
    try {
    const adMensRankings = new MensRanking(req.body);
    // console.log(req.body);
    const insertMens = await adMensRankings.save();
    res.status(201).send(insertMens);
    }catch(e) {
    res.status(400).send(e);
    }
});

//get all api data.
router.get("/mens", async (req, res) => {
    try {
    const getMensData = await MensRanking.find({}).sort({"ranking":1});
    res.send(getMensData);
    }catch(e) {
    res.status(400).send(e);
    }
});

//get only one api data
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
    const getMen = await MensRanking.findById({_id});
    res.send(getMen);
    }catch(e) {
    res.status(400).send(e);
    }
});

//update data with new data
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {new: true});
    res.send(getMen);
    }catch(e) {
    res.status(500).send(e);
    }
});

//delete data individual using id
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);
    }catch(e) {
    res.status(500).send(e);
    }
});

module.exports = router;