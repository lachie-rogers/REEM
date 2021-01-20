import React from "react";
import Camry from "../../images/camry.png";
import Hilux from "../../images/hilux.png";
import Yaris from "../../images/yaris.png";
import Corolla from "../../images/corolla.png";
import Rav4 from "../../images/rav4.png";
import Fortuner from "../../images/fortuner.jpg";
// details specific to return page
export default function CarDetailsReturn({returns, cars}) {
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

  return (
    <div className="">
      <div className="divider"></div>
      <h5>
        {cars &&
          cars.map((cars) => {
            if (cars.id == returns.Car) {
              return cars.Rego;
            }
          })}
      </h5>
      <div className="row">
        <div className="col" style={{paddingTop: 20}}>
          <img
            src={
              cars &&
              cars
                .map((cars) => {
                  if (cars.id == returns.Car) {
                    return getCarName(cars.Model);
                  }
                })
                .join("")
            }
            style={{width: "120px", height: "80px"}}
          />
          <h6>Date: {returns.Date}</h6>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
