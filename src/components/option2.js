import React from 'react';

const Option2 = props => {

  let classList = props.selected === props.text ? 'select2 option selected' : 'select2 option'

  return (
    <div className={classList} onClick={(e) => props.handleSelect(e)}>
      {props.text}
    </div >
  )
}

export default Option2