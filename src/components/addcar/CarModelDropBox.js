import React, {Component} from "react";
// select mole for add car
export default class CarModelBox extends Component {
  render() {
    return (
      <div>
        <select
          id="model"
          onChange={this.props.handleChange}
          className="browser-default"
        >
          <option value="" disabled selected>
            Car model
          </option>
          <option value="Yaris">Yaris</option>
          <option value="Corolla">Corolla</option>
          <option value="Camry">Camry</option>
          <option value="RAV4">RAV4</option>
          <option value="Hilux">Hilux</option>
          <option value="Fortuner">Fortuner</option>
        </select>
      </div>
    );
  }
}
