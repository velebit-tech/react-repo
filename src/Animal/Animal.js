import React from 'react';

const animal = (props) => {
  return (
    <div>
      <p>I am a {props.type} and I have {props.skin} skin.</p>
      <p>{props.children}</p>
    </div>
  )
};

export default animal;