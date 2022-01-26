import {Component} from 'react'

import EachPassword from '../EachPassword/index'

import './index.css'

class AddPasswords extends Component {
  state = {isPasswordShown: false}

  onToggleShowPasswords = () => {
    this.setState(prevState => ({
      isPasswordShown: !prevState.isPasswordShown,
    }))
  }

  onSearchPassword = event => {
    const {searchPasswords} = this.props
    const inputWebsite = event.target.value
    searchPasswords(inputWebsite)
  }

  deletePasswordsListItem = id => {
    const {deleteListItem, passwordsList} = this.props
    deleteListItem(id, passwordsList)
  }

  render() {
    const {isPasswordShown} = this.state
    const {passwordsList} = this.props
    const isNumberOfPassWordsStoredIsZero = passwordsList.length === 0

    return (
      <div className="your-passwords-bcg-container">
        <div className="your-password-search-container">
          <div className="your-password-heading-container">
            <h1 className="your-passwords-heading"> Your Passwords</h1>
            <p className="number-of-passwords"> {passwordsList.length} </p>
          </div>
          <div className="passwords-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="Search"
              className="search-password-input"
              onChange={this.onSearchPassword}
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="show-passwords-input-container">
          <input
            type="checkbox"
            id="showPasswords"
            onClick={this.onToggleShowPasswords}
          />
          <label className="show-passwords-text" htmlFor="showPasswords">
            {' '}
            Show Passwords
          </label>
        </div>
        {!isNumberOfPassWordsStoredIsZero ? (
          <ul className="your-passwords-container">
            {passwordsList.map(eachDetails => (
              <EachPassword
                isPasswordShown={isPasswordShown}
                eachDetails={eachDetails}
                key={eachDetails.id}
                deletePasswordsListItem={this.deletePasswordsListItem}
              />
            ))}
          </ul>
        ) : (
          <div className="no-passwords-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="no-passwords-image"
            />
            <p className="no-passwords-text"> No Passwords</p>
          </div>
        )}
      </div>
    )
  }
}

export default AddPasswords
