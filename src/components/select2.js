import React from 'react';
import OptionsContainer from './optionsContainer'

export default class Select2 extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: "Placeholder Text"
    }
  }

  options = [
    { text: 'Avocado', value: 1, selected: false },
    { text: 'Banana', value: 2, selected: false },
    { text: 'Clementines', value: 3, selected: false },
    { text: 'Dragonfruit', value: 4, selected: false },
  ]

  handleSelect = e => {
    this.setState({ selected: e.target.innerText })
  }

  showOptions = () => {
    console.log('show the options now!')
  }

  render() {
    return (
      <div className='select2 container'>
        <div className='select-text' onClick={() => this.showOptions()}>
          {this.state.selected}
        </div>

        <OptionsContainer list={this.options} handleSelect={this.handleSelect} />

      </div>)

  }
}