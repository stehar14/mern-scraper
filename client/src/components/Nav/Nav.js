import React from "react";

const Nav = () =>
  <nav className="white" role="navigation">
    <div className="nav-wrapper container">
      <a id="logo-container" href="/" className="brand-logo pacifico">Scrape That Beach</a>
      <ul className="right hide-on-med-and-down">
        <li><a className="pacifico" href="http://www.myrtlebeachonline.com/latest-news/">Myrtle Beach Online</a></li>
      </ul>

      <ul id="nav-mobile" className="side-nav">
        <li><a href="http://www.myrtlebeachonline.com/latest-news/">Myrtle Beach Online</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>;
  
export default Nav;
