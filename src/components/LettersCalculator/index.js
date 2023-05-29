import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value})
  }

  countLetters = str => str.replace(/[^a-zA-Z]/g, '').length

  render() {
    const {inputValue} = this.state
    const letterCount = this.countLetters(inputValue)

    return (
      <div className="letters-calculator-container">
        <h1 className="calculator-heading">Calculate the Letters you enter</h1>
        <label htmlFor="phrase-input">Enter the phrase</label>
        <input
          type="text"
          id="phrase-input"
          className="input-field"
          placeholder="Enter a phrase"
          value={inputValue}
          onChange={this.handleChange}
        />
        <p className="letter-count">No.of letters: {letterCount}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-image"
        />
      </div>
    )
  }
}

export default LettersCalculator
