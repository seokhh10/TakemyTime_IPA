const { User } = require("../Models");
const { populate } = require("../Models/users")

const userController = {
    //get all users
    getAllUsers(req, res){
        User.find({})
        console.log(err);
        res.status(400).json(err);
    }
};


module.exports = userController;