const express = require("express");
const app = express();
const port = 5000;
const items = ['Apple', 'Banana', 'Orange'];

app.use(express.json()); // MIDDLEWARE

app.get('/items', (req, res) => {
    res.json(items);   
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    if (newItem) {
        items.push(newItem);
        res.json(items);
    } else {
        res.status(400).send('Item is required');
    }
});

app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
