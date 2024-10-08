const { Thought, User } = require('../Models');


const thoughtController = {
//Get all thoughts
getAllThoughts(req, res) {
    Thought.find({})
    .populate({
        path: "reactions",
        select: "-__v",
    })

    .select("-__v")
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
},

// get one thought by it's id
getThoughtById({ params }, res) {
  Thought.findOne({ _id: params.id })
    .then((dbThoughtData) => {
      // if no thought is found
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought with this id'});
        return;
      }
      res.json(dbThoughtData);
    })
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

//Update thought by id
updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought with this ID'});
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => res.json(err));
},

// delete a thought
deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought with this id' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // add Reaction
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reactions: body } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },
  //Delte reaction
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true } 
    )

    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.json(err));
  }
};

module.exports = thoughtController;