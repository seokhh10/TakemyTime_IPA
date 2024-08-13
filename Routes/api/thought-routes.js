const router = require('express').Router();

const {
    getAllThoughts,

} = require('../../Controllers/thought-controllers');

//GET /api/thoughts
router.route('/').get(getAllThoughts);




module.exports = router;