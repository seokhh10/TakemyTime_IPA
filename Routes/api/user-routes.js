const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    
} = require('../../Controllers/user-controllers');
//Get all users and Post users
router.route('/').get(getAllUsers).post(createUser);

//Get one user by ID, PUT,and DELTE Aa user
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

//Add  and Delete a friend
router.route('/:id/friends/:friendsId').post(addFriend).delete(removeFriend);

module.exports = router;