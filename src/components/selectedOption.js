import React from 'react';

let selectedOption = props => {
  return (
    <span className="selected-option">
      <span
        className='remove'
        onClick={props.handleClick}>✖</span>
      <span className='text'>{props.text}</span>
    </span>
  )
}

export default selectedOption