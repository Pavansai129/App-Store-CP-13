import './index.css'

// Write your code here

const TabItem = props => {
  const {eachTab, onChangeTabItem} = props
  const {tabId, displayText} = eachTab
  const onChangeTab = () => {
    onChangeTabItem(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
