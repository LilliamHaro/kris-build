import React, { Component } from "react";
import logo from "../../assets/kris.png";
import "./Header.css";

import { Link, Router } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            {/* <Router> */}
              <div className="col-12">
                <nav className="flex-nav">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="img" />
                    </Link>
                  </div>
                  <div className="flex-box list-box">
                    <ul>
                      <li>
                        <Link to="/ingresatucodigo"> ingresa tu código</Link>
                      </li>
                      <li>
                        <Link to="/comoparticipar">cómo participar</Link>
                      </li>
                      <li>
                        <Link to="/canjeatupremio">canjea tu premio</Link>
                      </li>
                    </ul>
                    <ul className="social-box">
                      <li>
                        <a href="/">
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                    <button className="btn">ray</button>
                  </div>
                </nav>
              </div>
            {/* </Router> */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
