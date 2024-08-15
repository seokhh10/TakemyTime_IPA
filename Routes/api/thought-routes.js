const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    updateThought,

} = require('../../Controllers/thought-controllers');

//GET /api/thoughts
router.route('/').get(getAllThoughts);

//POST create a /api/thoughts/:userId 
router.route('/:userId').post(createThought);

//
router.route('/:id').put(updateThought);




module.exports = router;