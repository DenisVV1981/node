const User = require('../models/user');

// Получение всех книг пользователя
const getUserBooks = (req, res) => {
    const { userId } = req.params;
    User.findById(userId)
        .then(user => {
            res.status(200).send(user.books);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Обновляем пользователя
const addUserBook = (req, res) => {
    const { userId, bookId } = req.params;
    
    User.findByIdAndUpdate(userId, { $addToSet: { books: bookId } }, { new: true, runValidators: true })
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Обновляем пользователя
const removeUserBook = (req, res) => {
    const { userId, bookId } = req.params;
    
    User.findByIdAndUpdate(userId, 
        { $pullAll: { books: [{_id: bookId}] } }
        , { new: true, runValidators: true })
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

module.exports = {
    getUserBooks,
    addUserBook,
    removeUserBook
};