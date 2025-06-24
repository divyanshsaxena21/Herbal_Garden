import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import HerbCard from "../components/HerbCard";
import BlogCard from "../components/BlogCard";
import '../styles/HomePage.css'

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [herbs, setHerbs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    // Fetch the latest news, herbs, and blogs when the component mounts
    const fetchData = async () => {
      try {
        const newsResponse = await axios.get("/api/news");
        setNews(newsResponse.data);

        const herbsResponse = await axios.get("/api/herbs");
        setHerbs(herbsResponse.data);

        const blogsResponse = await axios.get("/api/blogs");
        setBlogs(blogsResponse.data);

        setLoading(false);  // Set loading to false once data is fetched
      } catch (err) {
        console.error("Error fetching data: ", err);  // Log error details
        setError("There was an error fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // If loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If error, display the error message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Welcome to the Virtual Herbal Garden</h1>

      <section>
        <h2>Latest News</h2>
        <div className="news-cards">
          {news.length > 0 ? (
            news.slice(0, 4).map((article) => (
              <NewsCard key={article.url} article={article} />
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
      </section>

      <section>
        <h2>Featured Herbs</h2>
        <div className="herb-cards">
          {herbs.length > 0 ? (
            herbs.slice(0, 4).map((herb) => (
              <HerbCard key={herb._id} herb={herb} />
            ))
          ) : (
            <p>No herbs available.</p>
          )}
        </div>
      </section>

      <section>
        <h2>Popular Blogs</h2>
        <div className="blog-cards">
          {blogs.length > 0 ? (
            blogs.slice(0, 4).map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
