const initState = {
  parkings: [
    {id: "1", lat: "1", long: "2"},
    {id: "2", lat: "2", long: "2"}
  ]
};

const parkingReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PARKING":
      window.alert("Successfully created parking location!");
      return state;
    case "CREATE_PARKING_ERROR":
      window.alert("Failed to Create Parking");
      return state;
    default:
      return state;
  }
};

export default parkingReducer;
