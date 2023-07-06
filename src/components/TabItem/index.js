import './index.css'

// Write your code here

const TabItem = props => {
  const {eachTab} = props
  const {tabId, displayText} = eachTab
  return (
    <li className="tab-item">
      <button>{displayText}</button>
    </li>
  )
}

export default TabItem
