// Code for dispacting payment token

const createPayment = (payment) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("Payments")
      .add({
        Token: payment,
      })
      .then(() => {
        dispatch({type: "CREATE_PAYMEMT", payment: payment});
        window.location.replace("/profile");
        window.alert("Booking and payment was successful!");
      })
      .catch((err) => {
        dispatch({type: "CREATE_PAYMENT_ERROR", err});
      });
  };
};
export default createPayment;
