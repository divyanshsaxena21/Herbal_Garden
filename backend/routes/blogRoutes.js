const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define routes for blogs
router.get('/blogs', blogController.getAllBlogs);  // Get all blogs
router.get('/blogs/:id', blogController.getBlogById);  // Get a single blog by ID
router.post('/blogs', blogController.addBlog);  // Add a new blog
router.put('/blogs/:id', blogController.updateBlog);  // Update a blog by ID
router.delete('/blogs/:id', blogController.deleteBlog);  // Delete a blog by ID

module.exports = router;
