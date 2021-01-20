import React, {Component} from "react";
import {connect} from "react-redux";
import Map from "./Map";
import {Redirect} from "react-router-dom";
import CarDetailsNoLog from "../car/CarDetailsNoLog";
import CarDetails from "../car/CarDetails";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

class MapPageNoLog extends Component {
  constructor(props) {
    super(props);
    // default melb location set as state
    this.state = {
      car: "",
      userLat: -37.808563,
      userLong: 144.963339,
      showCars: 4,
    };
    // updating user location using map api
    this.getLocation = this.getLocation.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getError = this.getError.bind(this);
  }
  // shows car detail based on picked car
  showInfo = (car) => {
    this.setState({car, userLat: car.Lat, userLong: car.Long});
  };

  // using api gets the location of the user onclick
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition, this.getError);
    } else {
      window.alert("Geolocation is not supported by this browser.");
    }
  }
  // sets state of got location
  getPosition(position) {
    this.setState({
      userLat: position.coords.latitude,
      userLong: position.coords.longitude,
    });
  }
  // error for location based errors
  getError(error) {
    if (error.PERMISSION_DENIED) {
      window.alert("Please give your browser location access.");
    } else if (error.POSITION_UNAVAILABLE) {
      window.alert("Location information is unavailable.");
    } else {
      window.alert("An unknown error occurred.");
    }
  }

  handleShowMore = () => {
    this.setState({
      showCars:
        this.state.showCars >= this.props.cars.length
          ? this.state.showCars
          : this.state.showCars + 1,
    });
  };

  render() {
    const {auth, cars} = this.props;
    // map styling
    const smallMap = "col s6 offset-s2 hide-on-small-only";
    const bigMap = "container hide-on-small-only";
    let mapSize = bigMap;
    // onclick changes page to render the chosen car
    const showDetails =
      this.state.car != "" ? (
        <div>
          <CarDetailsNoLog car={this.state.car} auth={auth} />
          <div style={{display: "none"}}>{(mapSize = smallMap)}</div>
        </div>
      ) : null;
    return (
      <div>
        <h3 className="center black-text" style={{paddingTop: 50}}>
          Available Cars
        </h3>
        <h6 className="center black-text">
          Click on the cars to see their details:
        </h6>
        <div className="center-align">
          <button
            onClick={this.getLocation}
            className="waves-effect waves-light grey btn"
          >
            Use current location
          </button>
        </div>
        <br></br>
        <div className="row">
          <div className={mapSize}>
            <Map
              cars={cars}
              showInfo={this.showInfo}
              userLat={this.state.userLat}
              userLong={this.state.userLong}
            />
          </div>
          <div className="hide-on-small-only col s3">{showDetails}</div>
          <div className="hide-on-small-only container offset-s2 col">
            <h3>More Details</h3>
            {cars &&
              cars.slice(0, this.state.showCars).map((car) => {
                return <CarDetails car={car} showInfo={this.showInfo} />;
              })}
            <br></br>
            <button
              onClick={this.handleShowMore}
              style={{height: 100, width: 150, marginTop: 10}}
              className="white"
            >
              Show more cars
            </button>
          </div>
          <div className="show-on-small hide-on-med-and-up">
            <Map
              cars={cars}
              showInfo={this.showInfo}
              userLat={this.state.userLat}
              userLong={this.state.userLong}
            />

            {showDetails}
          </div>
        </div>
        <br></br> <br></br>
        <br></br> <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    cars: state.firestore.ordered.Car,
  };
};

export default compose(
  firestoreConnect(() => ["Car"]),
  connect(mapStateToProps)
)(MapPageNoLog);
