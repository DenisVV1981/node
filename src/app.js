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

app.get('/books/', (request, response) => {
    response.status(200);
    response.send("Hello, World! /books");
});
app.get('/books/:bookId', (request, response) => {
    const { bookId } = request.params;
    console.log("Get a book. Received book ID from the URL:" + bookId);
    response.status(200);
    response.send("Hello, World!/books/:bookId");
});
app.post('/books/:bookId', (request, response) => {
    const { bookId } = request.params;
    console.log("Add a book. Received book ID from the URL:" + bookId);
    response.status(200);
    response.send("Hello, World!/books/:bookId");
});
app.put('/books/:bookId', (request, response) => {
    const { bookId } = request.params;
    console.log("Update a book. Received book ID from the URL:" + bookId);
    response.status(200);
    response.send("Hello, World!/books/:bookId");
});
app.delete('/books/:bookId', (request, response) => {
    const { bookId } = request.params;
    console.log("Remove a book. Received book ID from the URL:" + bookId);
    response.status(200);
    response.send("Hello, World!/books/:bookId");
});


app.get('/users/:userId/books/', (request, response) => {
    response.status(200);
    response.send("Hello, World! /users/:userId/books/");
});
app.post('/users/:userId/books/:bookId/', (request, response) => {
    const { userId, bookId } = request.params;
    console.log("Add a user book. Received book ID and user ID from the URL:" +userId + bookId);
    response.status(200);
    response.send("Hello, World!/users/:userId/books/:bookId/");
});
app.delete('/users/:userId/books/:bookId/', (request, response) => {
    const { userId, bookId } = request.params;
    console.log("Remove a user book. Received book ID and user ID from the URL:" +userId + bookId);
    response.status(200);
    response.send("Hello, World!/users/:userId/books/:bookId/");
});

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});





