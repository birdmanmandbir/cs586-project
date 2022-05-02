import { Tabs } from 'antd';
import ReactDOM from 'react-dom';
import './index.css'

const { TabPane } = Tabs;
function App() {
  return (
    <div className="app">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Account 1" key="1">
          Account
        </TabPane>
        <TabPane tab="Account 2" key="2">
          Account
        </TabPane>
      </Tabs>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
