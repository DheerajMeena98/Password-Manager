import './index.css'

const EachPassword = props => {
  const {eachDetails, isPasswordShown, deletePasswordsListItem} = props
  const {website, username, password, id} = eachDetails

  const onDeletePasswordDetails = () => {
    deletePasswordsListItem(id)
  }
  return (
    <li className="each-password-details-list-container">
      <div className="each-password-details-profile-card">
        <div className="name-dp-profile-container">
          <p> {username[0].toUpperCase()} </p>
        </div>
        <div className="each-password-details-card">
          <p className="website-text"> {website} </p>
          <p className="username-text"> {username}</p>
          {isPasswordShown ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          ) : (
            <p className="password-text"> {password} </p>
          )}
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeletePasswordDetails}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default EachPassword
