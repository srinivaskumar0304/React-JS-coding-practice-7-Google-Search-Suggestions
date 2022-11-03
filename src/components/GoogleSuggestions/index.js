// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onFullSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toUpperCase()
        .includes(searchInput.toUpperCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            className="google-image"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="suggestion-container">
            <div className="input-container">
              <img
                className="search-icon"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                className="input-text"
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeInput}
              />
            </div>
            <ul className="suggestions-list">
              {filteredList.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestion={eachSuggestion.suggestion}
                  onFullSuggestion={this.onFullSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
