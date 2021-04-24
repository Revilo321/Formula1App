import React, { Component } from "react";
import { Link } from "react-router-dom";
import F1Img from "../assets/f1 logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="/">
                <img src={F1Img} width="40" height="30" alt="F1 logo"></img>
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page">
                    <Link to="/">
                      Drivers <span className="sr-only">(current)</span>
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    <Link to="/Races">Races</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page">
                    <Link to="/Standings">Standings</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="jumbotron">
          <h1>
            Formula 1{" "}
            <img
              alt="F1"
              className="img-fluid rounded"
              src={F1Img}
              style={{ width: 250, height: 150 }}
            ></img>
          </h1>
          <h5> All the information you need about Formula 1!</h5>
        </div>
      </div>
    );
  }
}

export default Header;
