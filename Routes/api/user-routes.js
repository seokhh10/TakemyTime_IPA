const router = require('express').Router();

const {
    getAllUsers,
    
} = require('../../Controllers/user-controllers');

router.route('/').get(getAllUsers);

module.exports = router;