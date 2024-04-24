const { getUsers, createUser, getUser, updateUser, deleteUser } = require("../controllers/users");

const router = require('express').Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:userId', getUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);


module.exports = router;