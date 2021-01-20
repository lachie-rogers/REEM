// creates a parking location with bounds checking of lat/long

const createParking = (parking) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const latnum = Number(parking.lat);
    const longnum = Number(parking.long);

    if (latnum < -90 || latnum > 90) {
      window.alert("Latitude is out of bounds, please try again");
    } else if (longnum < 0 || longnum > 180) {
      window.alert("Longtitude is out of bounds, please try again");
    } else {
      const firestore = getFirestore();
      firestore
        .collection("Parkings")
        .add({
          Lat: Number(parking.lat),
          Long: Number(parking.long),
          Occupied: false,
          Name: parking.name,
        })
        .then(() => {
          dispatch({type: "CREATE_PARKING", parking: parking});
        })
        .catch((err) => {
          dispatch({type: "CREATE_PARKING_ERROR", err});
        });
    }
  };
};

export default createParking;
