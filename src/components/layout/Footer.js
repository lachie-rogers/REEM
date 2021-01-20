import React from "react";
import {NavLink} from "react-router-dom";
// default footer 
export default function Footer() {
  return (
    <div>
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Contact Us</h5>
              <p className="grey-text text-lighten-4">
                Email: admin@topreem.com
              </p>
              <p className="grey-text text-lighten-4">Phone: +61 3 9075 0208</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="/">
                    Home
                  </a>
                </li>
                <li className="grey-text text-lighten-3">
                  <NavLink to="/pricing" className="grey-text text-lighten-3">
                    Our Fleet
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Disclaimer: This website is not a real website and is being
            developed as part of a School of Science Capstone Project at RMIT
            University in Melbourne, Australia.
          </div>
        </div>
      </footer>
    </div>
  );
}
