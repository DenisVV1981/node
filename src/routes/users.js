const { getUsers, createUser, getUser, updateUser, deleteUser } = require("../controllers/users");
const { getUserBooks, addUserBook, removeUserBook } = require('../controllers/userBooks');

const router = require('express').Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:userId', getUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.get('/:userId/books/', getUserBooks);
router.post('/:userId/books/:bookId', addUserBook);
router.delete('/:userId/books/:bookId', removeUserBook);


module.exports = router;