import React, {Component} from "react";
import ReturnList from "../return/ReturnList";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

// return class
class Return extends Component {
  render() {
    const {returns, auth, cars} = this.props;
    // checks the user is authed if not back to signin
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <h3 className="center black-text" style={{paddingTop: 50}}>
          Return Car
        </h3>

        <h6 className="center black-text">Click to return car:</h6>

        <ReturnList returns={returns} auth={auth} cars={cars} />

        <div style={{paddingBottom: "25%"}}> </div>
      </div>
    );
  }
}

// adds the needed props from the database to props
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    returns: state.firestore.ordered.Bookings,
    cars: state.firestore.ordered.Car,
  };
};
// export compose - compose is a default export joniner connects to firebase database and then  "mapStateToProps"
export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["Bookings", "Car"])
)(Return);
