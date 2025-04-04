import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlogsById } from '../controller/blogController.js';
export const blogRouter =express.Router();


blogRouter.post("/",createBlog );
blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogsById);
blogRouter.delete("/:id", deleteBlog);

