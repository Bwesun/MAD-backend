const express = require('express');
const app = express();

//Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

//Start Server
app.listen(3000, () => {
    console.log('Server is running on https:3000');
});