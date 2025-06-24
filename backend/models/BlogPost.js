const mongoose = require('mongoose');

// BlogPost Schema
const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// BlogPost model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
