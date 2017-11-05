import React, { Component } from 'react';
import "./Landing.css";
import Footer from './Footer.js';
import Header from './Header.js';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">

        <div id="LandingPurpose">
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-8">
              <div id="LandingHeader">Welcome</div>
              <p>This is Stone Soup.</p>
            </div>
              <div className="col-md-4">
                <img className="img-responsive img-rounded" alt="food" src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
              </div>
            </div>
          </div>
        </div>

        <div id="LandingBenefits">
          <div className="container">
            <h1>Benefits</h1>
          </div>
        </div>

        <div id="LandingBusiness">
          <div className="container">
            <h1>Business Strategy</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
