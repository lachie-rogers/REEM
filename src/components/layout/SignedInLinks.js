import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authActions";
// user shown signed in links
const SignedInLinks = (props) => {
  return (
    <ul>
      <li className="nav-links">
        <NavLink to="/profile" style={navStyle}>
          Profile
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/map" style={navStyle}>
          Book Now
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/return" style={navStyle}>
          Return Car
        </NavLink>
      </li>
      <li className="nav-links">
        <a onClick={props.signOut} style={navStyle}>
          Log Out
        </a>
      </li>
      <li className="nav-links">
        <NavLink to="/" className="btn btn-floating green lighten-1">
          {props.profile.initials}
        </NavLink>
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

export default connect(null, mapDispatchToProps)(SignedInLinks);
