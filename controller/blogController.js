import blog from '../models/blog.js'
export const createBlog = async (req, res) => {

  try {
    const { title, category, image,content,auth } = req.body;
    const newBlog = new blog({ title, 
      category,
       image,
       content,
       auth:auth,
      completed:false, });
  await newBlog.save();

    res.status(200).json({ message: "Blog Created", blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
        const { title } = req.query; // ✅ Get title from query params

        let filter = {}; // Default: No filter

        if (title) {
            filter.title = { $regex: title, $options: "i" }; // ✅ Case-insensitive search
        }

        const blogs = await blog.find(filter).populate("auth");
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error in getAllBlogs:", error);
        res.status(500).json({ error: "Error fetching blogs" });
    }
};

export const getBlogsById=async(req,res)=>{
  const{id} =req.params
  try {
    const blogs =await blog.findById(id).populate("auth");
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });

  }
}

export const deleteBlog = async (req, res) => {
  try {
    await blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
