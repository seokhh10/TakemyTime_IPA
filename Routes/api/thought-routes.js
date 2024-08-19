const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,

} = require('../../Controllers/thought-controllers');

//GET all thoughts
router.route('/').get(getAllThoughts);

//POST create a thought
router.route('/:userId').post(createThought);

//Update, Delete thought
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

//api/thoughts/:thoughtId/reactions -POST-
router.route('/:thoughtId/reactions').post(addReaction);

//api/thoughts/:thoughtId/reactionId -DELETE-
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;