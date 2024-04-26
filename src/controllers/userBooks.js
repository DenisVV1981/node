const User = require('../models/user');

// Получение всех книг пользователя
const getUserBooks = (req, res) => {
    const { userId}  = req.params;
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

    User.findById(userId)
        .then(user => {
            console.log(user);
            if(!user || user.books.indexOf(bookId) === -1){
                console.log("книга не найдена");
                res.status(404).send("Данные не найдены");
            }
            else{
                console.log("Удаляем книгу");
                User.findByIdAndUpdate(userId, 
                    { $pullAll: { books: [{_id: bookId}] } }
                    , { new: true, runValidators: true })
                    .then(user => {
                        console.log(user);
                        if(user === null)
                            res.status(404).send("Данные не найдены");
                        else
                            res.status(200).send("Done");
                    })
                    .catch(e => {
                        res.status(500).send(e.message);
                    });
            }
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