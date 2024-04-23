


const http = require('http');
const {getUsers} = require('../modules/usersModule');

const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');

    if(url.searchParams.has("hello") ) {
        if(url.searchParams.get("hello") === "")        {
            response.statusCode = 400;
            response.statusMessage = 'Bad';
            response.header = "Content-Type: text/plain";
            response.write("Enter a name");
            response.end();
        } else{
            response.statusCode = 200;
            response.statusMessage = 'Ok';
            response.header = "Content-Type: text/plain";
            response.write("Hello, " + url.searchParams.get("hello"));
            response.end();
        }       
    
        return;
    }

    if(url.pathname === '/users') {
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.header = "Content-Type: application/json";
        response.write(getUsers());
        response.end();
    
        return;
    }

    if(url.searchParams.size === 0) {
        response.statusCode = 200;
        response.statusMessage = 'Ok';
        response.header = "Content-Type: text/plain";
        response.write("Hello, World!");
        response.end();
    
        return;
    }

    if(url.searchParams.size > 0) {
        response.statusCode = 500;
        response.statusMessage = 'Bad Request';
        //response.header = "Content-Type: application/json";
        //response.write("Hello, World!");
        response.end();
    
        return;
    }

    response.statusCode = 200;
    response.statusMessage = 'OK';
    response.header = "Content-Type: text/plain";
    response.write("Hello, ");
    response.end();

});

const port = process.env.nodejsport || 3003;
server.listen(port, '127.0.0.1', () => {
console.log(`Сервер запущен по адресу http://127.0.0.1:${port}/`);
} );