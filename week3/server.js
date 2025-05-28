const express = require('express');
const path = require('path'); 

const app = express();
const HTTP_PORT = process.env.PORT || 8000; 

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html')); 
});

app.get('/contact', (req, res) => {
    res.send('Contact page'); 
});

app.listen(HTTP_PORT, () => {
    console.log(`Server is running on port ${HTTP_PORT}`);
});
