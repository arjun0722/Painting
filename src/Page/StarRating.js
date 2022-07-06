import React, { useState } from "react";
import "./StarRating.css"
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="starrating"  >
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div className="starcontainer"
          
            key={index}
            
          >
           
            <div 
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            >
               <span className="star">&#9733;</span>
            </div>
           {
            index===5 ? "rating here" : ""
           }
          </div>
          
        );
      })}
    </div>
  );
};

export default StarRating;