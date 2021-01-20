import React, {Component} from "react";
import {connect} from "react-redux";
import {addCar} from "../../store/actions/carActions";
import {Redirect} from "react-router-dom";
import CarModelDropBox from "./CarModelDropBox";
import CarFuelRadio from "./CarFuelRadio";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import CarLocationDropBox from "./CarLocationDropBox";

class AddCar extends Component {
  state = {
    make: "Toyota",
    model: "",
    rego: "",
    capacity: "",
    lat: "",
    long: "",
    location: "",
    booked: false,
    fuel: "",
    notes: "",
    lastService: "",
    odometer: "",
  };
// handles changes and updates state
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // on submit action and stops refreshes
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCar(this.state);
  };
  // gets the location value and splits it into the lat and long
  getLocation = (e) => {
    var val = e.target.value;
    var result = val.split(",");
    this.setState({
      lat: result[0],
      long: result[1],
      location: result[2],
    });
  };

  render() {
    const {auth, parking} = this.props;
    // checks the current user is admin authed
    if (auth.email !== process.env.REACT_APP_ADMIN_ADDRESS)
      return <Redirect to="/signin" />;
    return (
      <div className="container">
        <h3 className="center black-text" style={{paddingTop: 50}}>
          Add Car
        </h3>

        <h6 className="center black-text">Fill in the form to add a car:</h6>
        <form onSubmit={this.handleSubmit} className="white container">
          <br></br>
          <div class="divider"></div>
          <br></br>
          <h5 style={{paddingLeft: "10%"}}>Car Information</h5>
          <div className="row">
            <div className="col s5 offset-s1" style={topPad}>
              <label htmlFor="make" style={{color: "black"}}>
                Car Make:
              </label>
              <input
                type="text"
                id="make"
                style={{height: "30px"}}
                disabled
                placeholder="Toyota"
              />
            </div>
            <div className="col s5" style={topPad}>
              <label htmlFor="model" style={{color: "black"}}>
                Car Model:
              </label>
              <CarModelDropBox handleChange={this.handleChange} />
            </div>
            <div className="col s5 offset-s1" style={topPad}>
              <label htmlFor="capacity" style={{color: "black"}}>
                Car Capacity:
              </label>
              <input
                type="number"
                id="capacity"
                onChange={this.handleChange}
                style={{height: "30px"}}
                min="2"
                max="7"
                required
              />
            </div>
            <div className="col s5 " style={topPad}>
              <label htmlFor="rego" style={{color: "black"}}>
                Registration Number:
              </label>
              <input
                type="text"
                id="rego"
                onChange={this.handleChange}
                style={{height: "30px"}}
                required
              />
            </div>
            <div className="col s2 offset-s1 " style={topPad}>
              <label htmlFor="fuel" style={{color: "black"}}>
                Starting Fuel:
              </label>
              <div>
                <CarFuelRadio handleChange={this.handleChange} />
              </div>
            </div>
          </div>
          <br></br>
          <div class="divider"></div>
          <br></br>
          <h5 style={{paddingLeft: "10%"}}>Car Location</h5>
          <div className="row">
            <div className="col s5 offset-s1" style={topPad}>
              <CarLocationDropBox
                parkings={parking}
                handleChange={this.getLocation}
              />
            </div>
          </div>
          <br></br>
          <div class="divider"></div>
          <br></br>
          <h5 style={{paddingLeft: "10%"}}>Service History</h5>
          <div className="row">
            <div className="col s5 offset-s1" style={topPad}>
              <label htmlFor="lastService" style={{color: "black"}}>
                Last Service:
              </label>
              <input
                type="date"
                id="lastService"
                onChange={this.handleChange}
                style={{height: "30px", color: "grey"}}
                required
              />
            </div>
            <div className="col s5" style={topPad}>
              <label htmlFor="odometer" style={{color: "black"}}>
                Odometer:
              </label>
              <input
                type="number"
                id="odometer"
                onChange={this.handleChange}
                style={{height: "30px"}}
                min="0"
                required
              />
            </div>
          </div>
          <br></br>
          <div class="divider"></div>
          <br></br>
          <h5 style={{paddingLeft: "10%"}}>Extra Information</h5>
          <div className="row">
            <div className="col s10 offset-s1 " style={topPad}>
              <label htmlFor="notes" style={{color: "black"}}>
                Additional Notes:
              </label>
              <input
                type="text"
                id="notes"
                onChange={this.handleChange}
                style={{height: "30px"}}
              />
            </div>
          </div>
          <br></br>
          <div className="row input-field">
            <button
              className="btn grey darken-2 z-depth-0 col s10 offset-s1"
              style={{fontWeight: 700}}
            >
              Add Car
            </button>
          </div>
        </form>

        <br></br>
        <br></br>
      </div>
    );
  }
}

const topPad = {
  paddingTop: 10,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    parking: state.firestore.ordered.Parkings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
  };
};

export default compose(
  firestoreConnect(() => ["Parkings"]),
  connect(mapStateToProps, mapDispatchToProps)
)(AddCar);
