import React, { useState } from "react";

import "./about.css";
import "../back/backb.css";
import Back from "../back";

import IconGithub from "../Images/icons/iconmonstr-github-1.svg";
import IconTwitter from "../Images/icons/iconmonstr-twitter-1.svg";

var myInfo = "Hello, I am 4rlenrey! \
I am passionate about programming and mathematics. and \
I\'m learning different technologies in computer science. \
At this point I\'m trying to make my first website but in the future \
I plan to learn technologies like Electron, Flutter and .NET ";


const About = () => (
  <div className="about">
    <div className="socialmedia box">
      <a href="https://github.com/4rlenrey" className="github-info">
        <img src={IconGithub} alt="Github-Logo" />
      </a>

      <a href="https://twitter.com/4rlenrey" className="twitter-info">
        <img src={IconTwitter} alt="Twitter-Logo" />
      </a>
    </div>
    <div className="contentText box">
    {myInfo}
     </div>
    <div className="backb">
      <Back />
    </div>
  </div>
);

export default About;
