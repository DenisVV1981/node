const fs = require('fs');
const path = require('path');

function greeting(name) {
    return `Hello, ${name}`;
};

const getUsers = () => {
    const filePath = path.join(__dirname, "../src/data/users.json")
    console.log(filePath);
    return fs.readFileSync( filePath);
};


module.exports = { greeting, getUsers };