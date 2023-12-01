const express = require('express');
const router = express.Router()
const Model = require('../model/model');
module.exports = router;


//search endpoint
router.get('/search', async (req, res) => {
    try {
        const nameQuery = req.query.name ? new RegExp(req.query.name, 'i') : null;
        const ageGtQuery = req.query['age-gt'] ? { age: { $gt: parseInt(req.query['age-gt']) } } : null;

        // Combine name and age-gt queries
        const searchQuery = {
            $and: [
                nameQuery ? { name: nameQuery } : {},
                ageGtQuery || {}
            ]
        };

        const results = await Model.find(searchQuery);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
