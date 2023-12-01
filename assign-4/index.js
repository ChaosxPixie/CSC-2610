require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');



mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('ByGOD we have connected to DB');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Welcomes you at ${3000}`)
})

app.use('/api', routes)







