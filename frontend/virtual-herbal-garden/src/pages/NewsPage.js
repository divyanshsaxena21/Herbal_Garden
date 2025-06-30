import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import '../styles/NewsPage.css';

const HerbNewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state
const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${URL}/api/herb-news`) // Update with the new herb-news route
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching herb-related news.");
        setLoading(false);
        console.error("Error fetching herb-related news:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Herb-Related News</h1>
      <div className="news-list">
        {news.length > 0 ? (
          news.map((article) => <NewsCard key={article.url} article={article} />)
        ) : (
          <p>No herb-related news available.</p>
        )}
      </div>
    </div>
  );
};

export default HerbNewsPage;
