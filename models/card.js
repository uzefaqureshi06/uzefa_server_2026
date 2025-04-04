import mongoose from 'mongoose'

const cardSchema =mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }, 
});

const card =mongoose.model('card' ,cardSchema)
export default card;