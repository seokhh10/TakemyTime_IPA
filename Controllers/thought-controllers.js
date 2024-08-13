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
},
//Create thought to a user
createThought({ body }, res) {
    console.log(body);
    Thought.create(body)
    .then((thoughtData) => {
        return User.findOneAndUpdate(
            { _id: body.userId },
            { $push: { thoughts: thoughtData._id} },
            { new: true }
        );
    })
    .then((dbUserData) => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No thought with this ID'});
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => res.json(err));
},

};

module.exports = thoughtController;