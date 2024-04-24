


const http = require('http');
const {getUsers} = require('../modules/usersModule');

const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');

    if(url.searchParams.has("hello") ) {
        if(url.searchParams.get("hello") === "")        {
            response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            response.write("Enter a name");
            response.end();
        } else{
            response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            response.write("Hello, " + url.searchParams.get("hello"));
            response.end();
        }       
        return;
    }

    if(url.pathname === '/users') {
        if (request.method === "GET") {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(getUsers());
            return;
        } else if (request.method === 'POST'){
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(getUsers());
            response.end();
        } else if (request.method === 'DELETE') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(getUsers());
            response.end();
        } 
        
        return;
    }
    if(url.pathname === '/books') {
        if (request.method === "GET") {
            response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            response.write("Получить список книг");
            response.end();
        } else if (request.method === 'POST'){
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(getUsers());
            response.end();
        } else if (request.method === 'DELETE') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(getUsers());
            response.end();
        } 
        
        return;
    }


    if (url.pathname === '/users/books'){
        let userId=null;
        if(url.searchParams.has("userId") ) {
            if(url.searchParams.get("userId") === "")        {
                response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
                response.write("Enter a userId");
                response.end();
                return;
            } else{
                userId = url.searchParams.get("hello");
            }       
        }

        if (request.method === "GET") {
            response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            response.write("Получить список книг, взятых пользователем с указанным ID");
            response.end();
            return;
        } else{

            let bookId=null;
            if(url.searchParams.has("bookId") ) {
                if(url.searchParams.get("bookId") === "")        {
                    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
                    response.write("Enter a bookId");
                    response.end();
                    return;
                } else{
                    bookId = url.searchParams.get("bookId");
                }       
            }
            
            if (request.method === 'POST'){
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.write(getUsers());
                response.end();

                console.log(userId);
                console.log(bookId);

            } else if (request.method === 'DELETE') {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.write(getUsers());
                response.end();

                console.log(userId);
                console.log(bookId);
            } 
        } 
        
        return;
    }
    
    return;


});

const port = process.env.nodejsport || 3003;
server.listen(port, '127.0.0.1', () => {
console.log(`Сервер запущен по адресу http://127.0.0.1:${port}/`);
} );