// action for adding a car to the database also does bound checking

export const addCar = (car) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const latnum = Number(car.lat);
    const longnum = Number(car.long);
    const date = new Date(car.lastService).toLocaleDateString();

    if (latnum < -90 || latnum > 90) {
      window.alert("Latitude is out of bounds, please try again");
    } else if (longnum < 0 || longnum > 180) {
      window.alert("Longtitude is out of bounds, please try again");
    } else if (car.model === "") {
      window.alert("Car Model cannot be empty");
    } else if (car.fuel === "") {
      window.alert("Car fuel cannot be empty");
    } else {
      const firestore = getFirestore();
      firestore
        .collection("Car")
        .add({
          Make: car.make,
          Model: car.model,
          Rego: car.rego,
          Capacity: Number(car.capacity),
          Fuel: Number(car.fuel),
          Notes: car.notes,
          Booked: car.booked,
          Lat: Number(car.lat),
          Long: Number(car.long),
          Odometer: Number(car.odometer),
          LastService: date,
          RequestService: false,
        })
        .then(() => {
          firestore
            .collection("Parkings")
            .doc(car.location)
            .set({
              Lat: Number(car.lat),
              Long: Number(car.long),
              Occupied: true,
            });
          dispatch({type: "ADD_CAR_SUCCESS", car: car});
        })
        .catch((err) => {
          dispatch({type: "ADD_CAR_ERROR", err});
        });
    }
  };
};

export const requestService = (car) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("Car")
      .doc(car.id)
      .update({RequestService: true})
      .then(dispatch({type: "SERVICE_REQUEST_SUCCESS", car: car}))
      .catch((err) => {
        dispatch({type: "SERVICE_REQUEST_ERROR", err});
      });
  };
};

export const releaseService = (car) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const date = new Date();
    const releaseDate = date.toLocaleDateString();
    firestore
      .collection("Car")
      .doc(car.id)
      .update({RequestService: false, LastService: releaseDate})
      .then(dispatch({type: "SERVICE_RELEASE_SUCCESS", car: car}))
      .catch((err) => {
        dispatch({type: "SERVICE_RELEASE_ERROR", err});
      });
  };
};

export const cancelServiceRequest = (car) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("Car")
      .doc(car.id)
      .update({RequestService: false})
      .then(dispatch({type: "SERVICE_CANCEL_SUCCESS", car: car}))
      .catch((err) => {
        dispatch({type: "SERVICE_CANCEL_ERROR", err});
      });
  };
};

export const setOdo = (odo,car) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("Car")
      .doc(car)
      .update({Odometer: odo})
      .then(dispatch({type: "ODO_UPDATE_SUCCESS", car: car}))
      .catch((err) => {
        dispatch({type: "ODO_UPDATE_ERROR", err});
      });
  };
};