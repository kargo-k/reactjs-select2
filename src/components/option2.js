import React from 'react';

const Option2 = props => {

  let classList = props.selected === props.text ? 'option selected' : 'option'

  return (
    <div className={classList} onClick={(e) => props.handleSelect(e)}>
      {props.text}
    </div >
  )
}

export default Option2