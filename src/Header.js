import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <div className="page-header">
      <link href="https://fonts.googleapis.com/css?family=Titan+One" rel="stylesheet" />
        <a className="navbar-brand" href="#">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <img alt="Brand" src={logo} class="center-block" />
          </div>
          <div className="col-sm-1"></div>
        </a>
        <h1>STONE SOUP</h1>
      </div>
    );
  }
}


export default Header;
