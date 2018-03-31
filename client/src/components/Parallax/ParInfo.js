import React from "react";

const ParInfo = (props) => {
  if (props.number === 1) {
    return (
      <div>
        <br/><br/>
        <h1 className="header center teal-text text-lighten-2 pacifico">Scrape That Beach</h1>
        <div className="row center">
          <h5 id="banner-header-2" className="header col s12 light">MongoDB enabled web scraper collecting all articles posted on Myrtle Beach Online</h5>
        </div>
        <div className="row center">
          <a href="http://github.com/stehar14/newsscraper" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Check out the GitHub Repo</a>
        </div>
        <br/><br/>
      </div>
    );
  } else if (props.number === 2) {
    return (
      <div className="row center">
        <a href="/scrape" id="button">
          <span>Scrape That Beach!</span>
        </a>
      </div>
    );
  } else if (props.number === 3) {
    return (
      ""
    );
  } else {
    return (
    <div>
      <h1 className="center">404 Page Not Found</h1>
      <h1 className="center">
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
    )
  }
}
export default ParInfo;