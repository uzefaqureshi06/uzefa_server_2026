import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    auth: {type: mongoose.Schema.Types.ObjectId, ref: "auth", required: true,},
      title: { type: String, required: true },
      category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
      image: { type: String, required: true },
      content: { type: String, required: true }
  }
);

const blog = mongoose.model("blog", BlogSchema);


export default blog;