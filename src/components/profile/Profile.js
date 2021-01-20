import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import AdminProfile from "./AdminProfile";
import UserProfile from "./UserProfile";

class Profile extends Component {
  render() {
    //  assigning to props
    const {auth, profile, bookings, cars, returns} = this.props;
    // checking auth
    if (!auth.uid) return <Redirect to="/signin" />;
    // checking const addmin id
    const name =
      auth.email === process.env.REACT_APP_ADMIN_ADDRESS
        ? "Admin"
        : profile.firstName + " " + profile.lastName;
    // code for if admin profile or ser profile is shown
    const profilePage =
      auth.email === process.env.REACT_APP_ADMIN_ADDRESS ? (
        <AdminProfile />
      ) : (
        <UserProfile
          bookings={bookings}
          cars={cars}
          auth={auth}
          profile={profile}
          returns={returns}
        />
      );
    return (
      <div className="dashboard container" style={{paddingTop: 50}}>
        <h1>{name}'s Profile</h1>
        <div style={{marginBottom: "10%"}}>{profilePage}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    bookings: state.firestore.ordered.Bookings,
    cars: state.firestore.ordered.Car,
    returns: state.firestore.ordered.Returns,
  };
};

export default compose(
  firestoreConnect(() => ["Bookings", "Car", "Returns"]),
  connect(mapStateToProps)
)(Profile);
