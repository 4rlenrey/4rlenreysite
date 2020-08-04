import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./about.css";
import Back from "../back";

import IconGithub from "../Images/icons/iconmonstr-github-1.svg";
import IconTwitter from "../Images/icons/iconmonstr-twitter-1.svg";

const About = () => (
  <div className="about">
    <div className="socialmedia">

      <a href="https://github.com/4rlenrey" className="github-info">
        <img src={IconGithub} alt="Github-Logo" />
      </a>

      <a href="https://twitter.com/4rlenrey" className="twitter-info">
        <img src={IconTwitter} alt="Twitter-Logo" />
      </a>

    </div>
    <div className="test">
    <Back />
    </div>
  </div>
);

export default About;
