import React, {useState} from "react";
import {connect} from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import AdminSignedInLinks from "./AdminSignedInLinks";

const Navbar = (props) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const {auth, profile} = props;
  const links =
    auth.email === process.env.REACT_APP_ADMIN_ADDRESS ? (
      <AdminSignedInLinks profile={profile} />
    ) : auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );
      // code for if to use admin or regular user navbar 
  const logoHeader = () => {
    return (
      <div className="container">
        <a href="/" className="brand-logo" style={navStyle}>
          REEM
        </a>
        <a
          href="#"
          className="sidenav-trigger right"
          style={navStyle}
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        >
          {!isMobileNavOpen ? (
            <i className="material-icons">menu</i>
          ) : (
            <i className="material-icons">close</i>
          )}
        </a>
        <ul className="right hide-on-med-and-down">
          <li>{links}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <nav className="nav-wrapper white">
        {logoHeader()}
        <div>
          {isMobileNavOpen && (
            <div className="tabs hide-on-large-only full-length-bar">
              {logoHeader()}

              <p
                className="tab show-on-medium hide-on-small-only"
                style={{paddingTop: 30}}
                onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              >
                {links}
              </p>

              <p
                className="tab show-on-small hide-on-med-and-up"
                style={{paddingTop: 30}}
                onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              >
                {links}
              </p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

const navStyle = {
  color: "black",
  fontWeight: "bolder",
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
