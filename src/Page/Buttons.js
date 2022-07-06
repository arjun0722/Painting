import React from "react";
import './Buttons.css'
function Buttons() {
  return (
    <div className="maincontainer">
        <div className="butt">

      <button className="rounded-pill">See Class Schedule</button>
        </div>
        <div className="save">
        <button className="second rounded-pill">&hearts; Save</button>
        </div>
        <div className="share">
        <button className="third rounded-pill">Share &#8686; </button>
        </div>
    </div>
  );
}

export default Buttons;
