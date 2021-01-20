import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import createPayment from "../../store/actions/paymentActions";
import {connect} from "react-redux";

class Payment extends Component {
  // test payment code can also be used as a tester for quick bookering or other needed testing, not user accessable

  render() {
    const {state, minDate, carPrice, onToken, email, onChange} = this.props;
    return (
      <div>
        <div className="divider"></div>
        <div>
          <h5>Pickup Date</h5>
          <label>Bookings are from 8am-12am </label>

          <input
            type="date"
            value={state.value}
            onChange={onChange}
            min={minDate}
          />

          <StripeCheckout
            amount={carPrice}
            locale="auto"
            stripeKey="pk_test_q3UxWkpxjuhTSSskQMQWUxYE00Rl2khydo"
            token={onToken}
            zipCode
            email={email}
            style={{marginTop: 10}}
          />
        </div>
        <p>
          <label> All Bookings are Final </label>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPayment: (payment) => dispatch(createPayment(payment)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
