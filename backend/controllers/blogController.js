const Blog = require('../models/BlogPost');  // Import Blog model

// Controller to fetch all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();  // Fetch all blogs
    res.json(blogs);  // Send blogs as response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to fetch a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);  // Find blog by ID
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);  // Send the blog details
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to add a new blog
exports.addBlog = async (req, res) => {
  const { title, content, author } = req.body;  // Extract data from request body
  try {
    const newBlog = new Blog({
      title,
      content,
      author,
    });
    await newBlog.save();  // Save the blog to the database
    res.status(201).json(newBlog);  // Respond with the newly created blog
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating blog' });
  }
};

// Controller to update an existing blog
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);  // Send the updated blog
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating blog' });
  }
};

// Controller to delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting blog' });
  }
};
