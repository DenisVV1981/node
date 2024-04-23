const dotenv = require('dotenv');

dotenv.config();
const { PORT = 3005, API_URL = 'http://localhost', MONGO_CONNECTION='mongodb://localhost:27017/mydb' } = process.env;


const mongoose = require('mongoose');

mongoose.connect(MONGO_CONNECTION, err => {
    if(err) throw err;
    console.log('Connected to MongoDB');
});