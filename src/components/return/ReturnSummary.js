import React from "react";
// simple return card
const ReturnSummary = ({returns}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "></span>
        <p>
          {returns.Car} {returns.User} {returns.Date}{" "}
        </p>
      </div>
    </div>
  );
};

export default ReturnSummary;
