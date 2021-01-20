import React, {Component} from "react";
import createParking from "../../store/actions/parkingActions";
import {connect} from "react-redux";

class AddParkingForm extends Component {
  state = {
    lat: "",
    long: "",
    name: "",
  };
// update state on input
  changeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
// submit hanlder and handes actions
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createParking(this.state);
    this.setState({lat: "", long: ""});
  };
  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="col s12 container"
          style={topPad}
        >
          <div className="row">
            <div className="col s4 offset-s2" style={topPad}>
              <label htmlFor="name" style={{color: "black"}}>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={this.changeInput}
                className="validate"
                style={{overflow: "hidden", height: "30px"}}
                required
              ></input>
            </div>
          </div>
          <div class="divider"></div>
          <div className="row">
            <div className="col s4 offset-s2" style={topPad}>
              <label htmlFor="lat" style={{color: "black"}}>
                Latitude
              </label>
              <input
                type="number"
                name="lat"
                id="lat"
                onChange={this.changeInput}
                value={this.state.lat}
                className="validate"
                style={{overflow: "hidden", height: "30px"}}
                required
              ></input>
            </div>
            <div className="col s4" style={topPad}>
              <label htmlFor="long" style={{color: "black"}}>
                Longitude
              </label>
              <input
                type="number"
                name="long"
                id="long"
                onChange={this.changeInput}
                value={this.state.long}
                className="validate"
                style={{overflow: "hidden", height: "30px"}}
                required
              ></input>
            </div>

            <button
              className="btn grey darken-2 z-depth-0 col s3 offset-s7"
              style={{fontWeight: 700, marginTop: 25}}
            >
              Add Parking Location
            </button>
          </div>
        </form>
      </div>
    );
  }
}
// padding style
const topPad = {
  paddingTop: 20,
};

const mapDispatchToProps = (dispatch) => {
  return {
    createParking: (parking) => dispatch(createParking(parking)),
  };
};
export default connect(null, mapDispatchToProps)(AddParkingForm);
