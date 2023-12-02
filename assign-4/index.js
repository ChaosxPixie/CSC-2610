const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

const routes = require('./routes/routes');

app.use('/api', routes)

//----NOTE-----
app.set("view engine", "ejs")

require('dotenv').config();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('ByGOD we have connected to DB');
})

//--NOTE--
app.get('/add', (req,res) => {
    res.render("form")
})

app.listen(80, () => {
    console.log(`Server Welcomes you at ${80}`)
})








