import React from 'react';
import OptionsContainer from './optionsContainer'

export default class Select2 extends React.Component {

  render() {

    let showOptions = () => {
      console.log('show the options now!')
    }

    let options = [
      { text: 'strawberry', value: 1, selected: true },
      { text: 'avocado', value: 2, selected: false },
      { text: 'mango', value: 3, selected: false },
      { text: 'dragonfruit', value: 4, selected: false },
      { text: 'lychee', value: 5, selected: false },
    ]

    return (
      <div className='select2'>

        <div id='select2' className='select-text' onClick={() => showOptions()}>
          {this.props.defaultText}
        </div>

        <OptionsContainer list={options} />

      </div>)

  }
}