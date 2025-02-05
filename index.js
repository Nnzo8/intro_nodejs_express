const express = require("express");
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/about',(req, res)=>{
    res.send('About us');
});

app.use(express.json()); //MIDDLEWARE

app.post('/submit',(req, res)=>{
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}); 