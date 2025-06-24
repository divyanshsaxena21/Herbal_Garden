import React from "react";
import './HerbCard.css'
const HerbCard = ({ herb }) => {
  return (
    <div className="herb-card">
      <h3>{herb.name}</h3>
      <img src={herb.imageUrl} alt={herb.name} />
      <p>{herb.description}</p>
    </div>
  );
};

export default HerbCard;
