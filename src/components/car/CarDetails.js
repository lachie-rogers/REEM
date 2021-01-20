import React, {Component} from "react";
import Camry from "../../images/camry.png";
import Hilux from "../../images/hilux.png";
import Yaris from "../../images/yaris.png";
import Corolla from "../../images/corolla.png";
import Rav4 from "../../images/rav4.png";
import Fortuner from "../../images/fortuner.jpg";
// a similar car detail page but as a function not a class
export default class CarDetails extends Component {
  render() {
    const {car, auth, userProf, showInfo} = this.props;
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

    if (userProf) {
      return (
        <div className="row">
          <h6>
            Car Booked: {car.Make} {car.Model}
          </h6>
          <div>
            <img
              className="col s4"
              src={getCarName(car.Model)}
              style={{width: "110px"}}
            />
            <p className="col s2 offset-s1">Seats: {car.Capacity}</p>
            <p className="col s2">Rego: {car.Rego} </p>
          </div>
        </div>
      );
    } else
      return (
        <button
          style={{height: 200, width: 300, margin: 4}}
          onClick={() => this.props.showInfo(car)}
        >
          <h5>
            {car.Make} {car.Model}
          </h5>
          <div>
            <img src={getCarName(car.Model)} style={{width: "35%"}} />
            <p>Seats: {car.Capacity}</p>
            <p>Rego: {car.Rego} </p>
          </div>
        </button>
      );
  }
}
