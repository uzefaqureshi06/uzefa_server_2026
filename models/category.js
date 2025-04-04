import mongoose from 'mongoose'

const categorySchema =mongoose.Schema({

    categoryName:String,
});

const category =mongoose.model('category' ,categorySchema)
export default category;