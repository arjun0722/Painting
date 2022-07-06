import React from "react";
import "./LeftSide.css";

function LeftSide() {
  return (
    <div className="row">
      <div className="col-md-6">
        <p className="text-muted">
          In this 5 day class we will explore artists Monet, Matisee, Van Gogh,
          among others and then recreate painting using crayon and
          watercolor.Students will have fun leaving about the artists & creating
          their own art inspired by their work
        </p>
        <div className="both">
          <div className="image">
            <img src="https://imgs.search.brave.com/k2h1EABu_CCf-dA9_rMDvF3FlVP_9pJpLI2V0KXB_Qw/rs:fit:1000:1200:1/g:ce/aHR0cDovL3d3dy5p/bGdpb3JuYWxlLml0/L3NpdGVzL2RlZmF1/bHQvZmlsZXMvZm90/by8yMDE5LzA0LzE5/LzE1NTU2NzEwODUt/dmFsZW50aW5hLW5h/cHBpLmpwZw" alt="" className="rounded-circle"></img>
          </div>
          <div className="name">
            <h4 className="subheading">Kimberly R Moseler</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
