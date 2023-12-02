const Customer = require('../model/model'); //phani has as Customer 

const express = require('express');

const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    console.log("I received /post")
    console.log(req.body.name)
    const data = new Customer({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        //res.status(200).json(dataToSave)

        res.render('form', {msg: `We've added ${req.body.name} to the record, Thanks!`})
    
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//assign-4 requirements
router.get('/search', async (req, res) => {
    try {
        const nameQuery = buildNameQuery(req.query.name);
        const ageGtQuery = buildAgeQuery(req.query['age-gt']);

        const searchQuery = buildSearchQuery(nameQuery, ageGtQuery);

        const results = await Customer.find(searchQuery);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

function buildNameQuery(name) {
    return name ? { name: new RegExp(name, 'i') } : {};
}

function buildAgeQuery(ageGt) {
    return ageGt ? { age: { $gt: parseInt(ageGt) } } : {};
}

function buildSearchQuery(nameQuery, ageQuery) {
    return { $and: [nameQuery, ageQuery] };
}


//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Customer.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Customer.findById(req.params.id);
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

        const result = await Customer.findByIdAndUpdate(
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
        const data = await Customer.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;