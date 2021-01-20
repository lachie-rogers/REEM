import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/staticpages/Home";
import Pricing from "./components/staticpages/Pricing";
import MapPage from "./components/map/MapPage";
import AddParkingPage from "./components/addparking/AddParkingPage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Profile from "./components/profile/Profile";
import Payment from "./components/payment/Payment";
import AddCar from "./components/addcar/AddCar"
import Return from "./components/return/Return";
import ReturnDetails from "./components/return/ReturnDetails";
import MapPageNoLog from "./components/map/MapPageNoLog";

// Paths for react router
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/map" component={MapPage} />
          <Route path='/returns/:id' component={ReturnDetails} />
          <Route path="/addparkingpage" component={AddParkingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/addcar" component={AddCar} />
          <Route path="/payment" component={Payment} />
          <Route path="/return" component={Return} />
          <Route path="/cars" component={MapPageNoLog}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
