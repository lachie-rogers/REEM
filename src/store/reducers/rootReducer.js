import parkingReducer from "./parkingReducer";
import carReducer from "./carReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  parking: parkingReducer,
  car: carReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
