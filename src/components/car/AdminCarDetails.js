import React from "react";
import Camry from "../../images/camry.png";
import Hilux from "../../images/hilux.png";
import Yaris from "../../images/yaris.png";
import Corolla from "../../images/corolla.png";
import Rav4 from "../../images/rav4.png";
import Fortuner from "../../images/fortuner.jpg";

export default function AdminCarDetails({
  car,
  auth,
  requestService,
  releaseService,
  cancelServiceRequest,
}) {
  // gets the car picture from name 
  const getCarName = (model) => {
    if (model === "Camry") {
      return Camry;
    } else if (model === "Hilux") {
      return Hilux;
    } else if (model === "Yaris") {
      return Yaris;
    } else if (model === "RAV4") {
      return Rav4;
    } else if (model === "Corolla") {
      return Corolla;
    } else if (model === "Fortuner") {
      return Fortuner;
    }
  };
// if the user is admin show admin spefic car details
  if (auth.email === process.env.REACT_APP_ADMIN_ADDRESS) {
    return (
      <div className="container">
        <div className="divider"></div>
        <h5> {car.Rego}</h5>
        <div className="row">
          <div className="col s1" style={{paddingTop: 20}}>
            <img
              src={getCarName(car.Model)}
              style={{width: "120px", height: "80px"}}
            />
          </div>
          <div className="col s4 offset-s2">
            <p>Manufacturer: {car.Make}</p>
            <p>Model: {car.Model} </p>
          </div>
          <div className="col s4 offset-s1">
            <p>Last Service: {car.LastService}</p>
            <p>Odometer: {car.Odometer} km</p>
          </div>
          <div className="">
            {!car.RequestService ? (
              <button
                className="waves-effect red btn col s3 offset-s7"
                onClick={() => requestService(car)}
              >
                Request Service
              </button>
            ) : (
              <div>
                <button
                  className="waves-effect green btn col s4 offset-s2"
                  onClick={() => releaseService(car)}
                >
                  Release from Service
                </button>
                <button
                  className="waves-effect red btn col s3 offset-s1"
                  onClick={() => cancelServiceRequest(car)}
                >
                  Cancel Request
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  } else return null;
}
