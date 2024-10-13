import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import "../Styles/Star.css";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [mouseAction, setMouseAction] = useState(0)
  const totalStar = 5;
  const handleClick = (idx) => {
    setRating(idx + 1);
  };
  return (
    <div>
      <h1>Star Rating ..</h1>
      <div className="star-container">
        {[...Array(totalStar)].map((item, idx) => (
          <span
            className={`star ${idx + 1 <= ( mouseAction ||rating ) ? "on" : "off"}`}
            onClick={() => handleClick(idx)}
            onMouseEnter={() => setMouseAction(idx + 1)}
            onMouseLeave={() => setMouseAction(rating)}
          >
            {<FaRegStar />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
