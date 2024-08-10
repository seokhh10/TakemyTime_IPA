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
    
})
