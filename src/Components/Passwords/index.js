import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AddPasswords from '../AddPasswords/index'

import './index.css'

class Passwords extends Component {
  state = {
    passwordsList: [],
    inputWebsite: '',
    inputUsername: '',
    inputPassword: '',
    anotherPasswordsList: [],
  }

  onAddWebsite = event => {
    this.setState({inputWebsite: event.target.value})
  }

  onAddUsername = event => {
    this.setState({inputUsername: event.target.value})
  }

  onAddPassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  onSubmitInformation = event => {
    event.preventDefault()
    const {inputWebsite, inputUsername, inputPassword} = this.state
    const newDetails = {
      id: uuidv4(),
      website: inputWebsite,
      username: inputUsername,
      password: inputPassword,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newDetails],
      anotherPasswordsList: [...prevState.passwordsList, newDetails],
      inputWebsite: '',
      inputUsername: '',
      inputPassword: '',
    }))
  }

  searchPasswords = inputWebsite => {
    const {anotherPasswordsList} = this.state

    const filteredList = anotherPasswordsList.filter(eachItem =>
      eachItem.website.includes(inputWebsite),
    )

    this.setState({passwordsList: filteredList})
  }

  deleteListItem = (id, passwordsList) => {
    const {anotherPasswordsList} = this.state
    const updatedList = anotherPasswordsList.filter(
      eachItem => eachItem.id !== id,
    )

    const updatedPasswordList = passwordsList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({
      anotherPasswordsList: updatedList,
      passwordsList: updatedPasswordList,
    })
  }

  render() {
    const {
      passwordsList,
      inputWebsite,
      inputUsername,
      inputPassword,
    } = this.state
    return (
      <div className="password-manager-bcg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-manager-logo"
        />
        <div className="add-password-container">
          <form className="add-password-card">
            <h1 className="add-new-password-heading"> Add New Password </h1>
            <div className="each-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-website"
                onChange={this.onAddWebsite}
                value={inputWebsite}
              />
            </div>
            <div className="each-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-website"
                onChange={this.onAddUsername}
                value={inputUsername}
              />
            </div>
            <div className="each-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-website"
                onChange={this.onAddPassword}
                value={inputPassword}
              />
            </div>
            <button
              type="submit"
              className="add-button"
              onClick={this.onSubmitInformation}
            >
              {' '}
              Add{' '}
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-lg-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-sm-image"
          />
        </div>
        <AddPasswords
          passwordsList={passwordsList}
          searchPasswords={this.searchPasswords}
          deleteListItem={this.deleteListItem}
        />
      </div>
    )
  }
}

export default Passwords
