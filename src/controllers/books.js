const Book = require('../models/book');


// Получим все книги из БД
const getBooks = (req, res) => {
    Book.find({})
        .then(books => {
            res.status(200).send(books);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Получим книгу по ID
const getBook = (req, res) => {
    const { bookId } = req.params;
    Book.findById(bookId)
        .then(book => {
            res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Создаем книгу
const createBook = (req, res) => {
    const data = req.body;
    console.log(data);
    Book.create(data)
        .then(book => {
            res.status(201).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Обновляем книгу
const updateBook = (req, res) => {
    const { bookId } = req.params;
    const data = req.body;
    Book.findByIdAndUpdate(bookId, data, { new: true, runValidators: true })
        .then(book => {
            res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Удаляем книгу
const deleteBook = (req, res) => {
    const { bookId } = req.params;
    Book.findByIdAndDelete(bookId)
        .then(book => {
            if(book === null)
                res.status(404).send("Данные не найдены");
            else
                res.status(200).send(book);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
};