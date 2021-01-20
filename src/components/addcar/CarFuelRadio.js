import React, {Component} from "react";
// radio styling for the add car class
export default class CarFuelRadio extends Component {
  render() {
    return (
      <div>
        <label>
          <input
            className="with-gap"
            name="fuel"
            type="radio"
            value="0.25"
            onClick={this.props.handleChange}
            id="fuel"
          />
          <span>1/4</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="fuel"
            type="radio"
            value="0.5"
            onClick={this.props.handleChange}
            id="fuel"
          />
          <span>1/2</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="fuel"
            type="radio"
            value="0.75"
            onClick={this.props.handleChange}
            id="fuel"
          />
          <span>3/4</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="fuel"
            id="fuel"
            type="radio"
            value="1"
            onClick={this.props.handleChange}
          />
          <span>Full</span>
        </label>
      </div>
    );
  }
}
