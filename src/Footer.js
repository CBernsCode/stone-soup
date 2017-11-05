import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <div className="col-sm-1"></div>
        <div className="col-sm-6">
          <p></p>
          <p>Stone Soup 2017</p>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-4">
          <p></p>
          <p>Made by: Amy Mazzucotelli, Chris Berns, Marvin Fung, Ross Hall.</p>
        </div>
      </div>
    );
  }
}


export default Footer;
