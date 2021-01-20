import React, {Component} from "react";
import CarDetails from "../car/CarDetails";

export default class UserProfile extends Component {
  state = {
    car: "",
    date: "",
    user: "",
    carDetails: "",
  };
  render() {
    const {auth, cars, bookings, returns} = this.props;
    var currentBookingEmpty = true;
    var pastBookingEmpty = true;
    return (
      <div>
        <div className="divider" style={{paddingTop: 30}}></div>
        <h4>Current Bookings</h4>
        {bookings &&
          // only getting currently booked cars mapped to the currently auth user
          bookings.map((booking) => {
            if (booking.User === auth.uid) {
              currentBookingEmpty = false;
              return (
                cars &&
                cars.map((car) => {
                  if (car.id === booking.Car) {
                    return (
                      <h6 className="row">
                        <h6>Booking Reference: {booking.id}</h6>
                        <h6>Booking Date: {booking.Date}</h6>
                        <p>
                          {<CarDetails auth={auth} car={car} userProf={true} />}
                        </p>
                        <h1 className="divider" style={{paddingTop: 4}}></h1>
                      </h6>
                    );
                  }
                })
              );
            }
          })}
        {currentBookingEmpty ? (
          <div className="container">
            <h3>No current bookings</h3>
          </div>
        ) : null}

        <div className="divider" style={{paddingTop: 30}}></div>
        <h4>Past Bookings</h4>
        {returns &&
          returns.map((returns) => {
            if (returns.User === auth.uid) {
              pastBookingEmpty = false;
              // same as above but with previous booked cars
              return (
                cars &&
                cars.map((car) => {
                  if (car.id === returns.Car) {
                    return (
                      <h6 className="row">
                        <h6>Booking Reference: {returns.id}</h6>
                        <h6>Booking Date: {returns.Date}</h6>
                        <p>
                          {<CarDetails auth={auth} car={car} userProf={true} />}
                        </p>
                        <h1 className="divider" style={{paddingTop: 4}}></h1>
                      </h6>
                    );
                  }
                })
              );
            }
          })}
        {pastBookingEmpty ? (
          <div className="container">
            <h3>No past bookings</h3>
          </div>
        ) : null}
      </div>
    );
  }
}
