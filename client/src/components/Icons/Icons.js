import React from "react";

const Icons = () =>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">track_changes</i></h2>
            <h5 class="center pacifico">Scrape</h5>
            <p class="center light">Whenever a user presses the scrape button below, we will scrape Myrtle Beach Online in order to obtain any new articles with some help from the Cheerio Node.js package.</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">subject</i></h2>
            <h5 class="center pacifico">Populate</h5>
            <p class="center light">After obtaining information related to new articles, we will add it to a Mongo database with the help of the Mongoose package before displaying all articles in the browser.</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="material-icons">note_add</i></h2>
            <h5 class="center pacifico">Comment</h5>
            <p class="center light">Users may select any article displayed and comment on it or leave a note for later. This function is especially useful for people looking for discourse on articles or doing research.</p>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default Icons;