import React from 'react';

const Option2 = props => {

  let classList
  if (props.value === null) {
    classList = 'select2 disabled'
  } else {
    // classList = props.selected === props.text ? 'select2 option selected' : 'select2 option'
    console.log('these are selected', props.selected);
    console.log(props.text);
    classList = props.selected.includes(props.text) ? 'select2 option selected' : 'select2 option'
  }

  return (
    <option className={classList} onClick={(e) => props.handleSelect(e)}>
      {props.text}
    </option >
  )
}

export default Option2