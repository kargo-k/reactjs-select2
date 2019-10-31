import React from 'react';

const Option2 = props => {

  let classList
  if (props.value === null) {
    classList = 'disabled'
  } else {
    classList = props.selected === props.text ? 'select2 option selected' : 'select2 option'
  }

  return (
    <option className={classList} onClick={(e) => props.handleSelect(e)}>
      {props.text}
    </option >
  )
}

export default Option2