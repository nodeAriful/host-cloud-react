import React from 'react'

function Header() {
    return (
        <div>
            <header className="bg-dark">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2>Host <em>Cloud</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="functional-buttons">
            <ul>
              <li><a href="/">Log in</a></li>
              <li><a href="/">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        </div>
    )
}

export default Header
