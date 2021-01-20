import React from "react";
import Yarris from "../../images/yaris.png";
import Corolla from "../../images/corolla.png";
import Camry from "../../images/camry.png";
import RAV4 from "../../images/rav4.png";
import Hilux from "../../images/hilux.png";
import Fortuner from "../../images/fortuner.jpg";


// static page for the pricing 
export default function Pricing() {
  return (
    <div>
      <h1 className="center grey-text text-darken-3" style={{paddingTop: 30}}>
        Pricing
      </h1>

      <br></br>

      <div className="container">
        <h5>Small Cars</h5>
        <h6>$8 per hour or $30 per day</h6>
        <div class="divider"></div>

        <div class="section">
          <div class="cars" width="50%">
            <img src={Yarris} alt="Toyota Yarris" width="350" />
            <h6>Yarris - 5 Seats</h6>
            <ul>
              <li>- 5 doors</li>
              <li>- Automatic transmission</li>
              <li>- Air condition</li>
              <li>- Cruise control</li>
              <li>- Reverse parking sensor</li>
            </ul>
            <br></br>
          </div>
          <div class="cars" width="50%">
            <img src={Corolla} alt="Toyota Corolla" width="350" />
            <h6>Corolla - 5 Seats</h6>
            <ul>
              <li>- 5 doors</li>
              <li>- Automatic transmission</li>
              <li>- Air condition</li>
              <li>- Cruise control</li>
              <li>- Reverse parking sensor</li>
            </ul>
            <br></br>
          </div>
        </div>
        <br></br>
        <br></br>

        <h5>Medium Cars</h5>
        <h6>$9 per hour or $35 per day</h6>
        <br></br>
        <div class="divider"></div>

        <div class="section">
          <div class="cars" width="50%">
            <img src={Camry} alt="Toyota Camry" width="350" />
            <h6>Camry - 5 Seats</h6>
            <ul>
              <li>- 4 doors</li>
              <li>- Automatic transmission</li>
              <li>- Air condition</li>
              <li>- Cruise control</li>
              <li>- Reverse parking sensor</li>
            </ul>
            <br></br>
          </div>
          <div class="cars" width="50%">
            <img src={RAV4} alt="Toyota RAV4" width="350" />
            <h6>RAV4 - 5 Seats</h6>
            <ul>
              <li>- 5 doors</li>
              <li>- Automatic transmission</li>
              <li>- Air condition</li>
              <li>- Cruise control</li>
              <li>- Reverse parking sensor</li>
            </ul>
            <br></br>
          </div>
        </div>
        <br></br>
        <br></br>

        <h5 class>Large Cars</h5>
        <h6>$10 per hour or $40 per day</h6>
        <div class="divider"></div>

        <div class="section">
          <div class="cars" width="50%">
            <img src={Hilux} alt="Toyota Hilux" width="350" />
            <h6>Hilux - 5 Seats</h6>
            <ul>
              <li>- 4 doors</li>
              <li>- Automatic transmission</li>
              <li>- Air condition</li>
              <li>- Cruise control</li>
              <li>- Reverse parking sensor</li>
            </ul>
            <br></br>
          </div>
          <div class="cars" width="50%">
            <img src={Fortuner} alt="Toyota Fortuner" width="350" />
            <h6>Fortuner - 7 Seats</h6>
            <ul>
              <li>- 5 doors</li>
              <li>- Automatic transmission</li>
              <li>- Air condition</li>
              <li>- Cruise control</li>
              <li>- Reverse parking sensor</li>
            </ul>
            <br></br>
          </div>
        </div>

        <div class="divider"></div>
        <br></br>
        <br></br>
        <h5>All of our cars are:</h5>
        <div className="section">
          <ul>
            <li>- Included with comprehensive car insurance</li>
            <li>
              - Regularly maintained and thoroughly serviced by professional
              mechanics at every 10 000 kilometers
            </li>
            <li>- Thoroughly cleaned regularly</li>
          </ul>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
