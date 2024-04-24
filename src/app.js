const dotenv = require('dotenv');
//const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config();

const { PORT = 3005, API_URL = 'http://localhost', MONGO_CONNECTION='mongodb://localhost:27017/mydb' } = process.env;

// mongoose.connect(MONGO_CONNECTION, err => {
//     if(err) throw err;
//     console.log('Connected to MongoDB');
// });

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.get('/users/', (request, response) => {
    response.status(200);
    response.send("Hello, World! /users");
});
app.get('/users/:userId', (request, response) => {
    const { userId } = request.params;
    console.log("Get a user. Received user ID from the URL:" + userId);
    response.status(200);
    response.send("Hello, World!/users/:userId");
});
app.post('/users/:userId', (request, response) => {
    const { userId } = request.params;
    console.log("Add a user. Received user ID from the URL:" + userId);
    response.status(200);
    response.send("Hello, World!/users/:userId");
});
app.put('/users/:userId', (request, response) => {
    const { userId } = request.params;
    console.log("Update a user. Received user ID from the URL:" + userId);
    response.status(200);
    response.send("Hello, World!/users/:userId");
});
app.delete('/users/:userId', (request, response) => {
    const { userId } = request.params;
    console.log("Remove a user. Received user ID from the URL:" + userId);
    response.status(200);
    response.send("Hello, World!/users/:userId");
});


app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});





