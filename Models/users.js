const { Schema, model } = require('mongoose');

//User Schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: [true, 'Please, enter your username'],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'Please, enter your email addres'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please, enter a valid email address!',
        ],
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],

      toJSON: {
        virtuals: true,
        getter: true,
      },

      id: false,
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//user model using userSchema
const User = model("User", userSchema);

//exsport user model
module.exports = User;
