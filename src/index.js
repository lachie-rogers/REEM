import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

//for render on auth ready
import {useSelector} from "react-redux";
import {isLoaded} from "react-redux-firebase";


// 
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(firebase, fbConfig)
  )
);

// Creates props from the User profiles using the firestore preauthed users
const profileSpecificProps = {
  userProfile: "Users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};

// rrfProps init, this effectively inits firebase
const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
};


// Auth is loaded - self explan
function AuthIsLoaded({children}) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="center">
        {" "}
        <p>Loading Reem...</p>
      </div>
    );
  return children;
}

//   Using react Dom the pages rerenders
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
