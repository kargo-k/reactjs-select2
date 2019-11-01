import React from 'react';
import List from './list';
import SelectedOption from './selectedOption'

export default class Multiselect2 extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false,
      search: "",
      selected: [],
      showOptions: []
    }
  }

  componentDidMount() {
    this.setState({
      allOptions: this.props.optionsList
    })
  }

  // toggles showing the options list on click
  toggleOptions = () => {
    let prev = this.state.show
    console.log(this.state.show);
    this.setState({ show: !prev })
  }

  handleSelect = e => {
    let selectedValues = this.state.selected
    selectedValues.push(e.target.value)
    console.log(this.state.selected)
    this.setState({ selected: selectedValues })
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

  closeOptions = e => {
    if (!e.target.className.includes('multiselect2')) {
      this.setState({
        show: false,
        search: "",
        showOptions: []
      })
    }
  }

  render() {
    // closes the option list when anywhere outside the select2 is clicked
    document.addEventListener('click', this.closeOptions)

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
            onClick={this.toggleOptions} />
        </div>
        {
          this.state.show ?
            <List
              search={this.state.search}
              handleSearch={this.handleSearch}
              selected={this.state.selected}
              list={this.state.showOptions.length ? this.state.showOptions : this.state.allOptions}
              handleSelect={this.handleSelect} /> : null
        }
      </div>
    )
  }
}