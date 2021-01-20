import React, {Component} from "react";
import Camry from "../../images/camry.png";
import Hilux from "../../images/hilux.png";
import Yaris from "../../images/yaris.png";
import Corolla from "../../images/corolla.png";
import Rav4 from "../../images/rav4.png";
import Fortuner from "../../images/fortuner.jpg";
import createPayment from "../../store/actions/paymentActions";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import Payment from "../payment/Payment";
// car details for booking
class CarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: props.car,
      value: "wrong",
      uid: props.auth.uid,
    };
  }
  // boilerplate stops refresh
  handleSubmit = (e) => {
    e.preventDefault();
  };
  // gets car picture
  getCarName = (model) => {
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
  // gets daily price for car models
  getCarPrice = (model) => {
    if (model === "Camry") {
      return 3500;
    } else if (model === "Hilux") {
      return 4000;
    } else if (model === "Yaris") {
      return 3000;
    } else if (model === "RAV4") {
      return 3500;
    } else if (model === "Corolla") {
      return 3000;
    } else if (model === "Fortuner") {
      return 4000;
    }
  };

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    if (props.car !== state.car) {
      return {
        car: props.car,
      };
    }
    return null;
  }
  // on token submit checks that values are set -- booking and price
  onToken = (token, addresses) => {
    if (this.state.value !== "wrong" || this.state.value !== "") {
      this.state.token = token;
      this.state.amount = this.getCarPrice(this.state.car.Model);
      this.props.createPayment(this.state);
    } else {
      window.alert("Error: payment failed - please enter date of booking");
      return;
    }
  };
  // updates state based on value change
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  // date handler to see if car is booked on a certain day
  handleChangeDate = (event) => {
    this.setState({value: event.target.value});
    this.props.bookings &&
      this.props.bookings.map((bookings) => {
        if (
          bookings.Date == event.target.value &&
          bookings.Car == this.state.car.id
        ) {
          return alert("Date Booked"), this.setState({value: ""});
        }
      });
  };
  // gets current date and cancels out any other prev date - so you cant book in the past
  getMinDate() {
    // gets todays date
    var minDay = new Date();
    var year = minDay.getFullYear();
    // month +1 since january is 0
    var month = minDay.getMonth() + 1;
    var day = minDay.getDate();
    // fixes single digit months
    var monthFix = month < 10 ? "0" + month : month;
    var dayFix = day < 10 ? "0" + day : day;
    // returns formatted minimum day for input
    return year + "-" + monthFix + "-" + dayFix;
  }

  render() {
    return (
      <div className="container">
        <h5>
          {this.state.car.Make} {this.state.car.Model}
        </h5>
        <div className="divider"></div>
        <div className="row">
          <img
            src={this.getCarName(this.state.car.Model)}
            style={{width: "110px"}}
          />
          <p>Seats: {this.state.car.Capacity}</p>
          <p>Rego: {this.state.car.Rego} </p>
        </div>

        <Payment
          state={this.state}
          minDate={this.getMinDate()}
          carPrice={this.getCarPrice(this.state.car.Model)}
          onToken={this.onToken}
          email={this.props.auth.email}
          onChange={this.handleChangeDate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPayment: (payment) => dispatch(createPayment(payment)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    bookings: state.firestore.ordered.Bookings,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ["Bookings"])
)(CarDetails);
