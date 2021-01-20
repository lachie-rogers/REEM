import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "./MapStyle";
import MapPins from "./MapPins";
import UserLocationPin from "./UserLocationPin";

export default class Map extends Component {
  static defaultProps = {
    zoom: 16.7,
  };

  // boilerplate code for handling submit- no refresh
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
  };

  render() {
    // inital melb location
    const initLat = -37.808563;
    const initLong = 144.963339;
    const {userLat, userLong} = this.props;
    return (
      <div className="row">
        <div style={{height: "75vh", width: "100%"}}>
          <GoogleMapReact
            // google map react map inputs
            bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
            initialCenter={[userLat, userLong]}
            center={[userLat, userLong]}
            defaultZoom={this.props.zoom}
            options={{styles: mapStyles}}
          >
            {this.props.cars &&
              this.props.cars.map((car) => {
                if (!car.Booked && !car.RequestService) {
                  return (
                    <MapPins
                      key={car.id}
                      lat={car.Lat}
                      lng={car.Long}
                      car={car}
                      showInfo={this.props.showInfo}
                    />
                  );
                }
              })}
            {initLat === userLat && initLong === userLong ? null : (
              <UserLocationPin lat={userLat} lng={userLong} />
            )}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
