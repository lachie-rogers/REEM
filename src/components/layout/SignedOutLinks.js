import React from "react";
import {NavLink} from "react-router-dom";

// default links for navbar - not signed in
const SignedOutLinks = () => {
  return (
    <ul>
      <li className="nav-links">
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/pricing" style={navStyle}>
          Our Fleet
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/cars" style={navStyle}>
        Available Cars
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/signup" style={navStyle}>
          Sign Up
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/signin" style={navStyle}>
          Sign In
        </NavLink>
      </li>
    </ul>
  );
};

const navStyle = {
  color: "black",
  fontWeight: "bolder",
};

export default SignedOutLinks;
