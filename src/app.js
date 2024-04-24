const express = require('express');
const routes = require('./routes');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { logMethodMiddleware, logAfterMiddleware } = require('./middlewares/middlewares');

dotenv.config();

const { PORT = 3005, API_URL = 'http://localhost', MONGO_CONNECTION='mongodb://localhost:27017/mydb' } = process.env;

mongoose.connect(MONGO_CONNECTION, {},)
    .then((res) => { console.log("Database connected");})
    .catch(error => {console.log(error);});
//

const app = express();
//middlewares
app.use(bodyParser.json()); // для JSON-формата
app.use('/', logMethodMiddleware); // просто лог, оформленные в миддлваре
app.use('/', routes);
app.use('/', logAfterMiddleware); // просто лог, оформленные в миддлваре


// resources
app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.get('/users/:userId/books/', (request, response) => {
    response.status(200);
    response.send("Hello, World! /users/:userId/books/");
});
app.post('/users/:userId/books/', (request, response) => {
    const { userId } = request.params;
    console.log("Add a user book. Received user ID from the URL:" +userId );
    response.status(200);
    response.send("Hello, World!/users/:userId/books/");
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





