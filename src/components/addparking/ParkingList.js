import React from "react";

const ParkingList = ({parkings}) => {
  return (
    <div className="section row">
      {parkings &&
        parkings.map((parking) => {
          if (!parking.Occupied) {
            return (
              <div className="col s8 offset-s2 container">
                <h6 className="card-title">
                  Parking Name: {parking.Name}
                  <br></br>
                  Parking ID: {parking.id}
                  <h6>
                    Latitude: {parking.Lat}, Longitude: {parking.Long}
                  </h6>
                </h6>
                <div className="divider"></div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default ParkingList;
