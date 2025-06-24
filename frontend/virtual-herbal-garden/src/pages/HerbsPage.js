import React, { useState, useEffect } from "react";
import axios from "axios";
import HerbCard from "../components/HerbCard";
import '../styles/HerbPage.css';
import '../styles/Card.css'

const HerbsPage = () => {
  const [herbs, setHerbs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/herbs")
      .then((response) => {
        setHerbs(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError("Error fetching herbs.");
        setLoading(false); // Set loading to false if an error occurs
        console.error("Error fetching herbs:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      <h1>Herbs List</h1>
      <div className="herb-list">
        {herbs.length > 0 ? (
          herbs.map((herb) => <HerbCard key={herb._id} herb={herb} />)
        ) : (
          <p>No herbs available.</p> // Handle empty state
        )}
      </div>
    </div>
  );
};

export default HerbsPage;
