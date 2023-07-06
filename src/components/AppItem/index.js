import './index.css'

// Write your code here
const AppItem = props => {
  const {appObj} = props
  const {appId, appName, imageUrl, category} = appObj
  return (
    <li className="app-item">
      <button>
        <img src={imageUrl} alt={appName} className="app-image" />
        <p>{appName}</p>
      </button>
    </li>
  )
}

export default AppItem
