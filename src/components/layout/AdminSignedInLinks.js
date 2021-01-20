import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authActions";
// link specific to the admin/ only shown logged in as admin
const AdminSignedInLinks = (props) => {
  return (
    <ul>
      <li className="nav-links">
        <NavLink to="/profile" style={navStyle}>
          Profile
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/addcar" style={navStyle}>
          Add Car
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/addparkingpage" style={navStyle}>
          Add Parking
        </NavLink>
      </li>
      <li className="nav-links">
        <a onClick={props.signOut} style={navStyle}>
          Log Out
        </a>
      </li>
    </ul>
  );
};

const navStyle = {
  color: "black",
  fontWeight: "bolder",
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(AdminSignedInLinks);
