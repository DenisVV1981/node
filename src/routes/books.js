const { getBooks, createBook, getBook, updateBook, deleteBook } = require("../controllers/books");

const router = require('express').Router();

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:bookId', getBook);
router.patch('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);


module.exports = router;