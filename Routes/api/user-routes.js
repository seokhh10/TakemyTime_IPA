const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    
} = require('../../Controllers/user-controllers');

router.route('/').get(getAllUsers).post(createUser);

module.exports = router;