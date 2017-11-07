import React, { Component } from 'react';
import logo from './logo.png';
import './Footer.css';

var style = {
  fontFamily: "Lobster Two",
  fontSize: "120%"
}

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <div className="col-sm-4 col-sm-offset-1">
          <p style={style} >&copy; Stone Soup 2017</p>
        </div>
        <div className="col-sm-3"></div>
        <div className="col-sm-4">
          <p></p>
          <p>Made by: Amy Mazzucotelli, Chris Berns, Marvin Fung, Ross Hall.</p>
        </div>
      </div>
    );
  }
}


export default Footer;
