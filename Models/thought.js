const { Schema, model, Types } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal),
        },
        username: {
            type: String,
            required: true,
        }
    
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;