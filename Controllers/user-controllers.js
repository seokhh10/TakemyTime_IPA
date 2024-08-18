const { User } = require("../Models");
const { populate } = require("../Models/users")

const userController = {
    //get all users
    getAllUsers(req, res) {
      User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    //create a user
    createUser({ body }, res) {
        User.create(body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(400).json(err));
    },

    //get one user by ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .select("-__v")
        .then((dbUserData) => {
            //If not user is found
            if (!dbUserData) {
                res.status(404).json({ message: "Not user found with this ID"});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });

    },
    //Update a user by ID
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({_id: params.id }, body, { new: true })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with this ID"});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    },

    //Delete a user
    deleteUser({ params }, res) {
        User.findOneAndDelete({_id: params.id })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No User found with this ID"});
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    },
    //add a friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { friends: params.friendsId } },
            { new: true }
        )
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(400).json(err));
    },
};

module.exports = userController;