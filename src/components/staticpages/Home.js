import React from "react";


// static homepage 
export default function Home() {
  return (
    <div>
      <div className="center Logo">
        <h1
          className="center"
          style={{
            paddingTop: 275,
            paddingBottom: 40,
            WebkitTextStrokeColor: "beige",
            letterSpacing: 2,
            opacity: 0.8,
            fontWeight: "bold",
            color: "beige",
          }}
        >
          
          Drive Away Today
        </h1>
      </div>

      <div className="container">
        <br></br>
        <div className="divider"></div>
        <h3 className="center">Car Sharing</h3>
        <br></br>
        <p>
          Discover more with Melbourne's latest car sharing - REEM. Simply
          select a car from our fleet at any of our convenient locations in the
          central business district of Melbourne. Book everything from your car,
          pick up location, return location, date and time. Hire a car for
          little as an hour or longer if needed. Easy return process at any of
          our designated locations. Just return the car at any of these
          locations of your choice with a minimum of a quater of a tank of
          petrol, a few photos and a few clicks on your phone and the
          transaction is complete.
        </p>
        <br></br> <br></br>
        <div className="divider"></div> <br></br>
        <h3 className="center">About Us</h3>
        <br></br>
        <h5>REEM's goal is to provide convenient transport for everyone to:</h5>
        <br></br>
        <ul>
          <li>
            {" "}
            - have the freedom and flexibility to live without a car or with a
            REEM car
          </li>
          <br></br>
          <li>
            {" "}
            - save your hard earned money without additional car ownership
            expenses
          </li>
          <br></br>
          <li>
            {" "}
            - have confidence with our quality, reliable and regularly serviced
            vehicles
          </li>
        </ul>
        <br></br>
        <p>
          REEM is a recently founded car share company developed in 2020. Highly
          influenced by Melbourne's own bike share scheme, the directors of REEM
          were inspired to provide a similar service where drivers can easily
          rent a car for a short amount of time. With a constantly increasing
          fleet of cars and parking locations, REEM aims to expand from
          Melbourne to every major city in Australia.
        </p>
        <br></br> <div className="divider"></div>
        <br></br>
      </div>
    </div>
  );
}
