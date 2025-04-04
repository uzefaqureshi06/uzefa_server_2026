import Category from '../models/category.js';

// Create Category
export const createCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;

        // Check if category already exists
        const existingCategory = await Category.findOne({ categoryName });
        if (existingCategory) {
            return res.status(400).json({ error: "Category already exists" });
        }

        const newCategory = new Category({ categoryName });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: "Error creating category" });
    }
};

export const getCategoryById =async(req,res)=>{
  const{id} =req.params
  try {
    const categories =await Category.findById(id);
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });

  }
}

// Get All Categories
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: "Error fetching categories" });
    }
};

// Delete Category
export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting category" });
    }
};
