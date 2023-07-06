import './index.css'

// Write your code here
const AppItem = props => {
  const {appObj} = props
  const {appName, imageUrl} = appObj
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
