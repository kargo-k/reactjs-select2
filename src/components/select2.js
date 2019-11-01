import React from 'react';
import List from './list';
import Search from './search';
import SelectedOption from './selectedOption'

export default class Select2 extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: [],
      show: false,
      search: "",
      showOptions: [],
    }
  }

  handleSearch = e => {
    // filters the list of options to include the search text
    let showList = this.state.allOptions.filter(opt => opt.text.toLowerCase().includes(e.target.value.toLowerCase()))

    // if there are no results, displays "No Results Found"
    if (!showList.length) {
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
        selected: [e.target.innerText],
        show: false,
        search: "",
        showOptions: this.state.allOptions
      })
    }
  }

  // for multi select
  handleMultiSelect = e => {
    let selectedValues = this.state.selected

    // only adds the target value if it is not found in the already selected values
    if (selectedValues.indexOf(e.target.value) === -1) {
      selectedValues.push(e.target.value)
      this.setState({ selected: selectedValues }, this.focusSearch)
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
        search: ""
      })
    }
  }

  deselect = e => {
    if (e.keyCode === 8 && this.state.search === "") {
      let prev = this.state.selected
      prev.pop()
      this.setState({ selected: prev })
    }
  }

  componentDidMount() {
    // if no placeholder text is defined, displays "Select an Option Below"
    this.setState({
      selected: this.props.placeholderText && this.props.type === 'single' ? [this.props.placeholderText] : [],
      allOptions: this.props.optionsList,
      showOptions: this.props.optionsList
    })
  }

  render() {
    // closes the option list when anywhere outside the select2 is clicked
    document.addEventListener('click', this.closeOptions)

    // render for a single select type
    if (this.props.type === 'single') {
      return (
        <div id='select2' className='select2 container'>
          <div className='select2 select-text' onClick={this.toggleOptions}>
            <div>{this.state.selected}</div>
            <div>{this.state.show ? '⬆' : '⬇'}</div>
          </div>

          {this.state.show
            ?
            <React.Fragment>
              <Search
                search={this.state.search}
                handleSearch={this.handleSearch}
              />
              <List
                search={this.state.search}
                handleSearch={this.handleSearch}
                selected={this.state.selected}
                list={this.state.showOptions ? this.state.showOptions : this.state.allOptions}
                handleSelect={this.handleSelect} />
            </React.Fragment>
            : null}

        </div>
      )
      // render for a multi select type
    } else if (this.props.type === 'multi') {
      return (
        <div className='multiselect2 container'>
          <div className='multiselect2-search search-div'>

            {this.state.selected.map(val => <SelectedOption
              key={this.state.selected.indexOf(val)}
              text={val}
              onClick={this.deselect} />)
            }

            <input
              id="multiselect2"
              className='multiselect2 search'
              type="text"
              onClick={this.toggleOptions}
              onChange={this.handleSearch}
              onKeyDown={this.deselect} />

          </div>

          {this.state.show ?
            <List
              search={this.state.search}
              handleSearch={this.handleSearch}
              selected={this.state.selected}
              list={this.state.showOptions.length ? this.state.showOptions : this.state.allOptions}
              handleSelect={this.handleMultiSelect} /> : null
          }
        </div>
      )
    }
  }
}