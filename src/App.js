
import React from "react";
import "./App.css";
import Header from "./Page/Header";
import LeftSide from "./Page/LeftSide";
import RightSide from "./Page/RightSide";
import StarRating from "./Page/StarRating";
import Buttons from "./Page/Buttons";
function App() {
  return (
    <div className="topheader">
      <Header />
      <div className="components">
        <div className="left">
          <LeftSide />
          <StarRating />
          <StarRating />
          <h5>Completed By 21 Learners</h5>
          <Buttons />
        </div>
      
        <div className="right">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
