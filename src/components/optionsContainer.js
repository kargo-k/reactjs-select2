import React from 'react';
import Option from './option2.js';

const optionsContainer = props => {

  return (
    <div className='container'>
      {props.list.map(option => <Option props={option} key={option.value} handleSelect={props.handleSelect}/>)}
    </div>
  )
}

export default optionsContainer