import React from "react";
import {Link} from "react-router-dom";
import ReturnSummary from "./ReturnSummary";

import CarDetailsReturn from "../car/CarDetailsReturn";

const ReturnList = ({returns, auth, cars}) => {
  var returnEmpty = true;
  return (
    <div className="project-list section">
      {returns &&
        returns.map((returns) => {
          if (returns.User === auth.uid) {
            returnEmpty = false;
            // checks the user id to only get the details for the logged in user
            return (
              <Link to={{pathname: "/returns/" + returns.id, state: {cars}}}>
                <CarDetailsReturn returns={returns} cars={cars} />
              </Link>
            );
          }
        })}
      {returnEmpty ? <h3>No cars to return</h3> : null}
    </div>
  );
};

export default ReturnList;
