import React from "react";

const Footer = () =>
  <footer class="page-footer teal">
    <div class="container">
      <div class="row">
        <div class="col l2"></div>
        <div class="col l5 s12">
          <h5 class="white-text">About the Developer</h5>
          <p class="grey-text text-lighten-4">Steve Harold is an up an coming web developer who prides himself on creating sleek, functional, creative front end designs and user interfaces along with effecient back end logic.</p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <a href="http://www.github.com/stehar14" target="_blank" rel="noopener noreferrer"><img class="connectimg" src={process.env.PUBLIC_URL + "/images/github.png"} alt="My Github Page"/></a>
          <a href="http://www.linkedin.com/in/steven-harold/" target="_blank" rel="noopener noreferrer"><img class="connectimg" src={process.env.PUBLIC_URL + "/images/linkedin.png"} alt="My Linkedin Page"/></a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="center">
          <span class="center">Made by Steve Harold</span>
        </div>
      </div>
    </div>
  </footer>;

export default Footer;