const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,
    deleteReaction,

} = require('../../Controllers/thought-controllers');

//GET all thoughts
router.route('/').get(getAllThoughts);

//POST create a thought
router.route('/:userId').post(createThought);

//Update, Delete thought
router.route('/:id').put(updateThought).delete(deleteThought);

//api/thoughts/:thoughtId/reactions -POST-
router.route('/:thoughtId/reactions').post(addReaction);

//api/thoughts/:thoughtId/reactionId -DELETE-
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;