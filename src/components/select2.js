import React from 'react';
import OptionsContainer from './optionsContainer'

export default class Select2 extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: "Select a fruit", // this is placeholder text
      showOptions: false
    }
  }

  options = [
    { text: 'Avocado', value: 1, selected: false },
    { text: 'Banana', value: 2, selected: false },
    { text: 'Clementines', value: 3, selected: false },
    { text: 'Dragonfruit', value: 4, selected: false },
  ]

  // updates the text shown to the selected option
  handleSelect = e => {
    this.setState({ selected: e.target.innerText, showOptions: false })
  }

  // toggles showing the options list on click
  toggleOptions = () => {
    let prev = this.state.showOptions
    this.setState({ showOptions: !prev })
  }

  render() {
    return (
      <div className='select2 container'>
        <div className='select-text' onClick={this.toggleOptions}>
          {this.state.selected}
        </div>

        {this.state.showOptions
          ? <OptionsContainer
            list={this.options}
            handleSelect={this.handleSelect} />
          : null}

      </div>)
  }
}