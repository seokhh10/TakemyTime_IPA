const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    
} = require('../../Controllers/user-controllers');
//Get all users and Post users
router.route('/').get(getAllUsers).post(createUser);

//Get one user by ID, PUT,and DELTE Aa user
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;