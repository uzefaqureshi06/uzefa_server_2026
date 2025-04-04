import express from 'express';
import { createCategory, deleteCategory, getAllCategories, getCategoryById } from '../controller/categoryController.js';
export const categoryRouter =express.Router();

categoryRouter.post('/',createCategory)
categoryRouter.get('/', getAllCategories);
categoryRouter.delete('/:id', deleteCategory);
categoryRouter.get("/:id", getCategoryById);