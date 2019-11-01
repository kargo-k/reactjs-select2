import React from 'react';
import OptionsContainer from './optionsContainer'

export default class Select2 extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: "Select a fruit: ", // this is placeholder text before a selection is made
      show: false,
      search: "",
      showOptions: null,
      allOptions: [ // user would populate options here in state
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
    }
  }

  handleSearch = e => {
    console.log(e.target.value)
    let showList = this.state.allOptions.filter(opt => opt.text.toLowerCase().includes(e.target.value))
    this.setState({ search: e.target.value, showOptions: showList })
  }

  // updates the text shown to the selected option
  handleSelect = e => {
    if (!e.target.className.includes('disabled')) {
      this.setState({
        selected: e.target.innerText,
        show: false,
        search: "",
        showOptions: null
      })
    }
  }

  // toggles showing the options list on click
  toggleOptions = () => {
    let prev = this.state.show
    this.setState({ show: !prev }, this.focusSearch)
  }

  focusSearch = () => {
    if (this.state.show) {
      document.querySelector('input').focus()
    }
  }

  closeOptions = e => {
    if (!e.target.className.includes('select2')) {
      this.setState({
        show: false,
        search: "",
        showOptions: null
      })
    }
  }

  render() {

    // closes the option list when anywhere outside the select2 is clicked
    document.addEventListener('click', this.closeOptions)

    return (
      <React.Fragment>
        <h3>Single Select2 Dropdown</h3>
        <div id='select2' className='select2 container'>
          <div className='select2 select-text' onClick={this.toggleOptions}>
            <div>{this.state.selected}</div>
            <div>{this.state.show ? '⬆' : '⬇'}</div>
          </div>

          {this.state.show
            ? <OptionsContainer
              search={this.state.search}
              handleSearch={this.handleSearch}
              selected={this.state.selected}
              list={this.state.showOptions ? this.state.showOptions : this.state.allOptions}
              handleSelect={this.handleSelect} />
            : null}

        </div>
      </React.Fragment>
    )
  }
}