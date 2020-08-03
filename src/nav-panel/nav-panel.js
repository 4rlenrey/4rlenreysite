import React from 'react';
import profileP from '../Images/logo.jpg';
import './nav-panel.css';

var handleClick = (e) => {
 e.preventDefault();
 console.log('Clicked on selection.');
};

const choices = {
  1: "About",
  2: "Games",
  3: "Contact"
};

const Panel = () => (
  <div className="panel">
  <img className="profileP" alt="proff" src={profileP}/>
  <div className="navigators">
    <button className="button" onClick={handleClick}>
      {choices[1]}
    </button>
    <button className="button" onClick={handleClick}>
      {choices[2]}
    </button>
    <button className="button" onClick={handleClick}>
      {choices[3]}
    </button>
  </div>
  </div>
);

export default Panel;
