import React, {Component} from "react";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import AdminCarDetails from "../car/AdminCarDetails";
import {
  requestService,
  releaseService,
  cancelServiceRequest,
} from "../../store/actions/carActions";

class AdminProfile extends Component {

  // value updaters request release cancel
  requestService = (car) => {
    this.props.requestService(car);
  };
  releaseService = (car) => {
    this.props.releaseService(car);
  };
  cancelServiceRequest = (car) => {
    this.props.cancelServiceRequest(car);
  };
  render() {
    const {car, auth} = this.props;
    return (
      <div>
        <h5 className="container">All Active Reem Cars:</h5>
        {car &&
          car.map((car) => {
            return (
              <AdminCarDetails
                car={car}
                auth={auth}
                requestService={this.requestService}
                releaseService={this.releaseService}
                cancelServiceRequest={this.cancelServiceRequest}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    car: state.firestore.ordered.Car,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestService: (car) => dispatch(requestService(car)),
    releaseService: (car) => dispatch(releaseService(car)),
    cancelServiceRequest: (car) => dispatch(cancelServiceRequest(car)),
  };
};

export default compose(
  firestoreConnect(() => ["Car"]),
  connect(mapStateToProps, mapDispatchToProps)
)(AdminProfile);
