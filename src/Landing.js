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
              <div id="LandingHeader">Stone Soup</div> <hr/>
              <div id="LandingText">Welcome!<br/>Stone Soup is a web application that helps encourage a collaborative approach to meal preparation.  The platform offers an interface that helps people work together in organizing the various aspects involved with cooking a communal meal. This includes everything from choosing recipes that match the preferences of the members in the group, to acquiring the right ingredients, as well as cooking and cleaning.</div>
            </div>
              <div className="col-md-4">
                <img className="img-responsive img-rounded" alt="image from https://img.huffingtonpost.com/" src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
              </div>
            </div>
            <span className="align-bottom">
              <div className="row">
                <div className="col-md-8 text-center">
                  <button id="LogInButton" type="button" class="btn btn-success btn-lg logged-out">Log In</button>

                </div>
                <div className="col-md-4"></div>
              </div>

            </span>
          </div>
        </div>

        <div id="LandingBenefits">
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-8">
              <div id="LandingHeader">Benefits</div> <hr/>
              <div id="LandingText">Food prep is more fun in groups. Users are also able to enjoy a wider variety of foods. One of the most important aspects of Stone Soup, is developing a healthy community. People will be there to encourage you and keep you on the path towards healthy living. We also believe that over time we can develop highly customized meal plans for even the pickiest among us.</div>
            </div>
              <div className="col-md-4">
                <img className="img-responsive img-rounded" alt="Image from https://img.buzzfeed.com/" src="https://img.buzzfeed.com/buzzfeed-static/static/2016-08/4/16/campaign_images/buzzfeed-prod-fastlane03/7-easy-ways-to-master-meal-prep-2-9583-1470343498-3_dblbig.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div id="LandingBusiness">
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-8">
              <div id="LandingHeader">Business Strategy</div> <hr/>
              <div id="LandingText">We believe that strong corporate partnership is the best for our users. Services like Blue Apron and HelloFresh can play an important role in providing healthy, delicious food for those who want to cook together. We also believe that with this platform we can generate revenue through advertisement of foods and cookware. 
              </div>
            </div>
              <div className="col-md-4">
                <img className="img-responsive img-rounded" alt="Image from http://www.youthareawesome.com" src="http://www.youthareawesome.com/wp-content/uploads/2015/03/fruit.jpg" />
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Landing;
