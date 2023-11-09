console.log("I saved the file again!")
// these are variable names (express and app, can be changed)
const express = require('express')
const app = express()

app.set('view engine', 'ejs');
//get homepage
app.get('/', (req,res) => { //this stuff takes care of data
//when you say send you complete the request, you can only send once can use html in send
    // res.send('hello world <br> my second line'); // typically dont do html here tho 
   // res.status(500).send("you broke me"); // can send a message with status
   //res.json({"fruit":"tomato"}); //sends json
   //res.download("package.json"); //  downloads the file
   //res.send("Hello World") //can only do one terminal statement
   //view engines: a bunch of simple languages that communicates where the data comes and goes PUG/ ejs
   res.render('./whatever.ejs', {viewEngine: "EJSSSS"}) //html file with ejs commands - index can be named anything 
})

// make express listen on port number
app.listen(7321)