import React from 'react';
import List from './list'

export default class Select2 extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: "Select an Option Below:",
      show: false,
      search: "",
      showOptions: null
    }
  }

  handleSearch = e => {
    // filters the list of options to include the search text
    let showList = this.state.allOptions.filter(opt => opt.text.toLowerCase().includes(e.target.value.toLowerCase()))

    // if there are no results, displays "No Results Found"
    if (!showList.length) {
      console.log('showlist is empty')
      this.setState({
        search: e.target.value,
        showOptions: [{ text: "No Results Found", value: null }]
      })
    } else {
      this.setState({
        search: e.target.value,
        showOptions: showList
      })
    }
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

  componentDidMount() {
    // if no placeholder text is defined, displays "Select an Option Below"
    this.setState({
      selected: this.props.placeholderText ? this.props.placeholderText : "Select an Option Below",
      allOptions: this.props.optionsList
    })
  }


  render() {
    // closes the option list when anywhere outside the select2 is clicked
    document.addEventListener('click', this.closeOptions)

    return (
      <div id='select2' className='select2 container'>
        <div className='select2 select-text' onClick={this.toggleOptions}>
          <div>{this.state.selected}</div>
          <div>{this.state.show ? '⬆' : '⬇'}</div>
        </div>

        {this.state.show
          ? <List
            search={this.state.search}
            handleSearch={this.handleSearch}
            selected={this.state.selected}
            list={this.state.showOptions ? this.state.showOptions : this.state.allOptions}
            handleSelect={this.handleSelect} />
          : null}

      </div>
    )
  }
}