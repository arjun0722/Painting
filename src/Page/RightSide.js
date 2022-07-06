import React from "react";
import photo from "../Record.json";
import "./RightSide.css";

function RightSide() {
  console.log(photo);
  return (
    <div className="container">
      {photo.map((item, index) => {
        return (
          <div className="fleximages" key={index}>
            <div className="item1">
              <img src={item.img1} alt="" height="330" width="268px" />
            </div>
            <div className="item2">
            
              <img src={item.img2} alt="" height="161px" width="250px" />
              <div className="item4">
                <img src={item.img3} alt="" height="161px" width="250px" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RightSide;
