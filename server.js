const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001; 
const app = express(); 
const notes = require("./db/db.json");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/publix/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    notes.push(req.body); 
    res.json(notes); 
});

app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));
