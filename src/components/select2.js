import React from 'react';
import OptionsContainer from './optionsContainer'

export default class Select2 extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: "Select a fruit: ", // this is placeholder text before a selection is made
      showOptions: false
    }
  }

  // user would populate with custom options here
  options = [
    { text: 'A', value: null },
    { text: 'Acai', value: 10 },
    { text: 'Apricots', value: 11 },
    { text: 'Avocado', value: 12 },

    { text: 'B', value: null },
    { text: 'Banana', value: 20 },
    { text: 'Blackberry', value: 21 },
    { text: 'Blueberry', value: 22 },

    { text: 'C', value: null },
    { text: 'Cantaloupe', value: 30 },
    { text: 'Clementine', value: 31 },
    { text: 'Currants', value: 32 },

    { text: 'D', value: null },
    { text: 'Dragonfruit', value: 40 },

    { text: 'E', value: null },
    { text: 'Elderberry', value: 50 },
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

  closeOptions = e => {
    if (!e.target.className.includes('select2')) {
      this.setState({ showOptions: false })
    }
  }

  render() {

    // closes the option list when anywhere outside the select2 is clicked
    document.addEventListener('click', this.closeOptions)

    return (
      <React.Fragment>
        <h3>Single Select2 Dropdown</h3>
        <div id='select2' className='select2 container'>
          <div className='select-text' onClick={this.toggleOptions}>
            <div>{this.state.selected}</div>
            <div>⬇</div>
          </div>

          {this.state.showOptions
            ? <OptionsContainer
              selected={this.state.selected}
              list={this.options}
              handleSelect={this.handleSelect} />
            : null}

        </div>
      </React.Fragment>
    )
  }
}