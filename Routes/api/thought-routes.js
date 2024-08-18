const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,

} = require('../../Controllers/thought-controllers');

//GET /api/thoughts
router.route('/').get(getAllThoughts);

//POST create a /api/thoughts/:userId 
router.route('/:userId').post(createThought);

//Update, Delete
router.route('/:id').put(updateThought).delete(deleteThought);




module.exports = router;