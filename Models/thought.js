const { Schema, model, Types } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlenght: 250,
        },
    
    }
)