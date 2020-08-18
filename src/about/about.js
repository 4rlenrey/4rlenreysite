import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./about.css";
import "../back/backb.css";
import Back from "../back";

import IconGithub from "../Images/icons/iconmonstr-github-1.svg";
import IconTwitter from "../Images/icons/iconmonstr-twitter-1.svg";
import IconReddit from "../Images/icons/iconmonstr-reddit-4.svg";

const TextInf = () => (
  <div className="TextInfo">
    <h1>Hello, I am 4rlenrey!</h1>
    <p>
      I am passionate about programming and mathematics.
      I'm learning different technologies in computer science. At this point I'm
      trying to make my first website but in the future I plan to learn
      technologies like Electron, Flutter and .NET{" "}
    </p>{" "}
  </div>
);

const SocMedia = () => (
  <div className="socialmedia box">
    <a href="https://github.com/4rlenrey" className="github-info">
      <img src={IconGithub} alt="Github-Logo" />
    </a>
    <a href="https://twitter.com/4rlenrey" className="twitter-info">
      <img src={IconTwitter} alt="Twitter-Logo" />
    </a>
    <a href="https://www.reddit.com/user/4rlenrey" className="reddit-info">
      <img src={IconReddit} alt="Reddit-Logo" />
    </a>
  </div>
);

//to do

const Contact = () => (
  <div className="socialmedia box"> 
  <pre>
    <p>My contact email address is: </p>
    4rlenrey.contact@gmail.com
  </pre>
  </div>
);

const About = () => {
  var SectionChoose = ({ chosen }) => {
    if (chosen === "About") {
      return <TextInf />;
    } else if (chosen === "Social") {
      return <SocMedia />;
    } else if (chosen === "Contact") {
      return <Contact />;
    } else {
      return <div chosen="TextInfo"></div>;
    }
  };

  var [section, changeSecton] = useState("About");

  return (
    <div className="about">
      <div className="navigator box">
        <Button className="SelectorInfo" onClick={() => changeSecton("About")}>
          About
        </Button>
        <Button className="SelectorInfo" onClick={() => changeSecton("Social")}>
          Social
        </Button>
        <Button className="SelectorInfo" onClick={() => changeSecton("Contact")}>
          Contact
        </Button>
      </div>
      <div className="contentText box">
        <SectionChoose chosen={section} />
      </div>

      <div className="backb">
        <Back />
      </div>
    </div>
  );
};
export default About;
