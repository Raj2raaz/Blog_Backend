import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controller/blog.controller.js";
import { protect } from "../middleware/auth.middleware.js"; 

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;
