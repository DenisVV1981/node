const router = require('express').Router();
const userRouter = require('./users');
const bookRouter = require('./books');

router.use('/users', userRouter);
router.use('/books', bookRouter);

// // Обработка несуществующих маршрутов
router.use((request, response, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// // Обработка 500 ошибки
router.use((err, request, response, next) => {
    response.status(err.status || 500).json({
      error: {
        message: err.message || 'Что-то пошло не так',
      },
    });
  });

module.exports = router;