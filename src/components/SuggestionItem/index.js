// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, onFullSuggestion} = props

  const onClickFullSuggestion = () => {
    onFullSuggestion(suggestion)
  }

  return (
    <li className="suggestions-list-container">
      <p className="suggestion">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickFullSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
