import React from 'react';
import profileP from '../Images/logo.jpg';
import './nav-panel.css';

var handleClick = (e) => {
 e.preventDefault();
 console.log('Clicked on link.');
};

const choices = {
  "1": "About",
  "2": "Games",
  "3": "Contact"
};

const Panel = () => (
  <div className="panel">
  <div className="image-cropper">
  <img className="profileP" alt="proff" src={profileP}/> </div>
  <div className="navigators">
    <button onClick={handleClick}>
      {choices[1]}
    </button>
    <button onClick={handleClick}>
      {choices[2]}
    </button>
    <button onClick={handleClick}>
      {choices[3]}
    </button>
  </div>
  </div>
);

export default Panel;
