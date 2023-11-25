const express = require('express');
const Model = require('../model/model');
const router = express.Router();

//https://web.postman.co/home

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
        res.status(400).json({ message: error.message })
    }
})


/**  design a new get-based end-point, /search which support searching by name and age-gt parameters. for example,
 * /search?name=pha&age-gt=34
 * /search?name=mi
 * /search?age-gt=20
 * 
 * 1. "name" should give output any record whose "name" value starts with the given string (case insensively).
 * 
 * 2. "Age-gt" should give output any record whose "age" valus is greater than the given value
 */

// get search endpoint
router.get('/search', async (req, res) => {
    try {
      const { name, age } = req.query;
  
      let query = {};
  
      if (name) {
        // Case-insensitive search for records whose 'name' starts with the given string
        query.name = new RegExp(`^${name}`, 'i');
      }
  
      if (age) {
        // Search for records whose 'age' is greater than the given value
        query.age = { $gt: parseInt(age-gt) };
      }
  
      // Use the User model to query the database with the 'query' object
      const results = await User.find(query);
  
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
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
        res.status(500).json({ message: error.message })
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

module.exports = router;
