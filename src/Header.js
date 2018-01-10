import React, { Component } from 'react';
import logo from './logo.png';
import './css/Header.css';

class Header extends Component {
  render() {
    return(
      <div className="page-header">
        <a className="navbar-brand" role="button" href="/">
          <img alt="Brand" src={logo} />
        </a>
        <h1>Stone Soup</h1>
      </div>
    );
  }
}


export default Header;
