import React, {Component} from "react";
import {connect} from "react-redux";
import {signIn} from "../../store/actions/authActions";
import {Redirect} from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const {auth} = this.props;
    if (auth.uid) return <Redirect to="/profile" />;
    return (
      <div className="container" style={{paddingBottom: 75}}>
        <form onSubmit={this.handleSubmit} className="white container">
          <h1 className="grey-text text-darken-3" style={{paddingTop: 30}}>
            Sign In
          </h1>
          <h6>Please enter your valid email and password below:</h6>
          <div style={{paddingTop: 40}}>
            <label htmlFor="email" style={{color: "black"}}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              style={{height: 30}}
              required
            />
          </div>
          <div style={{paddingTop: 20}}>
            <label htmlFor="password" style={{color: "black"}}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              style={{height: 30}}
              required
            />
          </div>
          <div className="input-field" style={{paddingBottom: 50}}>
            <button className="btn grey darken-2 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
