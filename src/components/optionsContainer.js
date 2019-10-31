import React from 'react';
import Option from './option2.js';

const optionsContainer = props => {

  return (
    <div className='options-list'>
      {props.list.map(option => {
        return <Option 
                  selected={props.selected}
                  text={option.text}
                  value={option.value} 
                  key={props.list.indexOf(option)} 
                  handleSelect={props.handleSelect}/>
      })}
    </div>
  )
}

export default optionsContainer