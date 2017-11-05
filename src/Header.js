import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <div className="page-header">
        <a className="navbar-brand" href="#">
          <img alt="Brand" src={logo} />
        </a>
        <h1>Stone Soup</h1>
      </div>
    );
  }
}


export default Header;
