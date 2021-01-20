const initState = {
  cars: [
    {id: "1", lat: "-37.809198", long: "144.962145"},
    {id: "2", lat: "2", long: "2"},
  ],
  carError: null,
};

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CAR_SUCCESS":
      window.alert("Successfully Added Car");
      return state;
    case "ADD_CAR_ERROR":
      window.alert("Failed to Add Car");
      return state;
    case "SERVICE_REQUEST_SUCCESS":
      window.alert("Service has been requested");
      return state;
    case "SERVICE_REQUEST_ERROR":
      window.alert("Failed to request a service");
      return state;
    case "SERVICE_RELEASE_SUCCESS":
      window.alert("Car is operational");
      return state;
    case "SERVICE_RELEASE_ERROR":
      window.alert("Failed to deploy car");
      return state;
    case "SERVICE_CANCEL_SUCCESS":
      window.alert("Service Request has been cancelled");
      return state;
    case "SERVICE_CANCEL_ERROR":
      window.alert("Failed cancel service request, try again.");
      return state;
    case "RETURN_SUCCESS":
      window.alert("Car has been returned!");
      window.location.replace("/profile");
      return state;
    default:
      return state;
  }
};

export default carReducer;
