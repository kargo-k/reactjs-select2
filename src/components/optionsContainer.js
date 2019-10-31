import React from 'react';
import Option from './option2.js';

const optionsContainer = props => {

  return (
    <div className='container'>
      this is the container?!
      {props.list.map(option => <Option props={option} key={option.value}/>)}
    </div>
  )
}

export default optionsContainer