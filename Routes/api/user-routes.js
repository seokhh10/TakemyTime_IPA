const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    
} = require('../../Controllers/user-controllers');
//Get all users and Post users
router.route('/').get(getAllUsers).post(createUser);

//Get one user by ID
router.route('/:id').get(getUserById).put(updateUser);

module.exports = router;