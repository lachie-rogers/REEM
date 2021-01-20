import React, {Component} from "react";
import AddParkingForm from "./AddParkingForm";
import ParkingList from "./ParkingList";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
// boilerplate html class for adding parking
class AddParkingPage extends Component {
  render() {
    const {parkings, auth} = this.props;
    // checks user is Admin authed
    if (auth.email !== process.env.REACT_APP_ADMIN_ADDRESS)
      return <Redirect to="/signin" />;
    return (
      <div>
        <h3 className="center black-text" style={{paddingTop: 50}}>
          Add Parking
        </h3>
        <h6 className="center black-text">
          Fill in the form to add a parking location:
        </h6>
        <div className="center container">
          <AddParkingForm />
          <h3 className="center black-text" style={{paddingTop: 50}}>
            Available Parking:
          </h3>
          <ParkingList parkings={parkings} />
          <br></br>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    parkings: state.firestore.ordered.Parkings,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect(() => ["Parkings"]),
  connect(mapStateToProps)
)(AddParkingPage);
