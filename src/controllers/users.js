const User = require('../models/user');

// Получение всех пользователей из БД
const getUsers = (req, res) => {
    User.find({})
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Получим пользователя по ID
const getUser = (req, res) => {
    const { userId } = req.params;
    User.findById(userId)
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Создаем пользователя
const createUser = (req, res) => {
    const data = req.body;
    console.log(data);
    User.create(data)
        .then(user => {
            res.status(201).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Обновляем пользователя
const updateUser = (req, res) => {
    const { userId } = req.params;
    const data = req.body;
    User.findByIdAndUpdate(userId, data, { new: true, runValidators: true })
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

// Удаляем пользователя
const deleteUser = (req, res) => {
    const { userId } = req.params;
    User.findByIdAndDelete(userId)
        .then(user => {
            if(user === null)
                res.status(404).send("Данные не найдены");
            else
                res.status(200).send("Done");
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};