import React from 'react';

const Option2 = props => {

  let { text, value, selected } = props.props

  let classList = selected ? 'option selected' : 'option'

  return (
    <div className={classList} onClick={(e) => props.handleSelect(e)}>
      {text}
    </div >
  )
}

export default Option2