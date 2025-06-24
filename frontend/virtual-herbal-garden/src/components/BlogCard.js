import React from "react";
import { Link } from "react-router-dom";
import './BlogCard.css'
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h3>
        <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
      </h3>
      <p>{blog.content.slice(0, 100)}...</p>
    </div>
  );
};

export default BlogCard;
