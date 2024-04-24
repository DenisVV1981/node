const logMethodMiddleware = (request, response, next) => {
    console.log('Request Type:', request.method,', url:', request.originalUrl);
    next(); // вызов следующего метода
};


const logAfterMiddleware = (request, response, next) => {
    next(); // вызов следующего метода
    console.log('Закончили обработку');
};


module.exports = {logMethodMiddleware, logAfterMiddleware}