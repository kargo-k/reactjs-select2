import React from 'react';
import Option from './option2.js';

const List = props => {

  return (
    <div className='select2 options-list'>

      {props.list.map(option => {
        return <Option
          selected={props.selected}
          text={option.text}
          value={option.value}
          key={props.list.indexOf(option)}
          handleSelect={props.handleSelect} />
      })}
    </div>
  )
}

export default List