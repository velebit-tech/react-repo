import React from 'react';

import './Animal.css';

const animal = (props) => {
  return (
    <div className="Animal">
      <p>I am a {props.type} and I have {props.skin} skin.</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.skinchange} value={props.skin} />
    </div>
  )
};

export default animal;