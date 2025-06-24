import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null); // State to track error

  useEffect(() => {
    // Fetch the single blog post using the ID
    axios
      .get(`http://localhost:5000/api/blogs/${id}`) // Use the full URL if not using proxy
      .then((response) => setBlog(response.data))
      .catch((error) => setError("Error fetching blog details"));
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>
        <strong>Published at:</strong>{" "}
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogDetailPage;
