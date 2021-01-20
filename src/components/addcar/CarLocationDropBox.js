import React from "react";

// drop box logic for the add car
export default function CarLocationDropBox({parkings, handleChange}) {
  var lat = 0;
  var long = 0;

  return (
    <div>
      <select className="browser-default" id="location" onChange={handleChange}>
        {/* <option value="LOL">LOL</option>
        <option value="LOL1">LOL1</option> */}
        <option value="" disabled selected>
          Locations
        </option>
        
        {parkings &&
        // gets only the nonfilled spots 
          parkings.map((parking) => {
            if (!parking.Occupied) {
              return (
                <option
                  id="location"
                  value={parking.Lat + "," + parking.Long + "," + parking.id}
                >
                  {parking.Name}
                </option>
              );
            }
          })}
      </select>
    </div>
  );
}
