import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {returnCar, uploadPhoto} from "../../store/actions/returnActions";
import {firestoreConnect} from "react-redux-firebase";
import {setOdo} from "../../store/actions/carActions";

class ReturnDetails extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    bookingsid: this.props.match.params.id,
    Car: "",
    Date: "",
    User: "",
    returned: true,
    odometer: "",
    notes: "",
    lastOdometer: "",
  };
  // handles the on submit so the page doesnt refresh breaking react
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.uploadPhoto(this.state.file);
    this.props.returnCar(this.state);
    this.props.setOdo(this.state.odometer, this.state.Car);
  };

  // onchange update the new state - example changing the date value
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    {
      // map promise code checks the last odo is not smaller than curent
      this.props.cars &&
        this.props.cars.map((car) => {
          if (car.id == this.state.Car) {
            return (this.state.lastOdometer = car.Odometer);
          }
        });
    }

    {
      //pulls the current car id from url and adds the needed values to sate
      this.props.bookings &&
        this.props.bookings.map((bookings) => {
          if (bookings.id == this.props.match.params.id) {
            return (
              (this.state.Car = bookings.Car),
              (this.state.Date = bookings.Date),
              (this.state.User = bookings.User),
              ""
            );
          }
        });
    }
    return (
      <div className="container">
        <h3 className="center black-text" style={{paddingTop: 50}}>
          Return Car
        </h3>
        <h6 className="center black-text">
          Fill in the form to Return the car:
        </h6>
        <form onSubmit={this.handleSubmit} className="white container">
          <br></br>
          <div class="divider"></div>
          <br></br>
          <h5 style={{paddingLeft: "10%"}}>Car Information</h5>
          <div className="row">
            <div className="col s5 offset-s1" style={topPad}>
              <label htmlFor="Current Photo" style={{color: "black"}}>
                Current Photo:
              </label>
              <input
                type="file"
                id="file"
                onChange={this.handleChange}
                style={{height: "30px", color: "grey"}}
                required
              />
            </div>
            <div className="col s5" style={topPad}>
              <label htmlFor="odometer" style={{color: "black"}}>
                End Odometer (min {this.state.lastOdometer}kms) :
              </label>
              <input
                type="number"
                id="odometer"
                onChange={this.handleChange}
                style={{height: "30px"}}
                min={this.state.lastOdometer}
                required
              />
            </div>
            <div className="col s5 offset-s1" style={topPad}></div>
            <div className="col s5 " style={topPad}></div>
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
              Return Car
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
    bookings: state.firestore.ordered.Bookings,
    cars: state.firestore.ordered.Car,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    returnCar: (details) => dispatch(returnCar(details)),
    setOdo: (odo, car) => dispatch(setOdo(odo, car)),
    uploadPhoto: (details) => dispatch(uploadPhoto(details)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ["Bookings", "Car"])
)(ReturnDetails);
