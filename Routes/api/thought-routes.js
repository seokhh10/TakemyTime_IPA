const router = require('express').Router();

const {
    getAllThoughts,
    createThought,

} = require('../../Controllers/thought-controllers');

//GET /api/thoughts
router.route('/').get(getAllThoughts);

//POST create a /api/thoughts/:userId 
router.route('/:userId').post(createThought);





module.exports = router;