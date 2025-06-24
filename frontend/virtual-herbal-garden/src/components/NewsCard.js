import React from "react";
import './NewsCard.css'
const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
