import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../store/actions/authActions";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const {auth, authError} = this.props;
    if (auth.uid) return <Redirect to="/profile" />;
    return (
      <div className="container" style={{paddingBottom: 40}}>
        <form onSubmit={this.handleSubmit} className="white container">
          <h1 className="grey-text text-darken-3" style={{paddingTop: 30}}>
            Sign Up
          </h1>
          <h6 style={{paddingBottom: 20}}>
            Please fill in the form with your valid details to create an account
            with us:
          </h6>
          <div style={topPad}>
            <label htmlFor="email" style={{color: "black"}}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              style={{height: "30px"}}
              required
            />
          </div>
          <div style={topPad}>
            <label htmlFor="password" style={{color: "black"}}>
              Password: (min length of 6 characters)
            </label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              style={{height: "30px"}}
              required
            />
          </div>
          <div style={topPad}>
            <label htmlFor="firstName" style={{color: "black"}}>
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              style={{height: "30px"}}
              required
            />
          </div>
          <div style={topPad}>
            <label htmlFor="lastName" style={{color: "black"}}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              style={{height: "30px"}}
              required
            />
          </div>
          <div className="input-field">
            <button className="btn grey darken-2 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
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
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
