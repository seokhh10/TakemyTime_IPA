const { Thought, User } = require('../Models');


const thoughtController = {
//Get all thoughts
getAllThoughts(req, res) {
    Thought.find({})
    .populate({
        path: "reactions",
        select: "-__v",
    })

    .populate({
        path: "thoughts",
        select: "-__v",
    })

    .select("-__v")
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
}
};

module.exports = thoughtController;