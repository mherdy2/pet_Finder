// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express()

const PORT = 5502

// hello world route
app.get('/', (req, res) => {
    console.log('here');
    res.send('Hello World')
})
// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    app.use(express.static('public'));
    });

// // get all pets from the database
app.get('./pets', (req, res) => {
   req.jason(pets)

});
app.listen(PORT, () => {
    console.log('Server is listening on port http://localhost:' +PORT);
});




// // get pet by owner with query string
// app.get('/api/v1/pets/owner', (req, res) => {
//     // get the owner from the request


//     // find the pet in the pets array
//     const pet = pets.find(pet => pet.owner === owner);

//     // send the pet as a response

// });

// // get pet by name
// app.get('/api/v1/pets/:name', (req, res) => {
//     // get the name from the request


//     // find the pet in the pets array
//     const pet = pets.find(pet => pet.name === name);

//     // send the pet as a response

// });


module.exports = app;