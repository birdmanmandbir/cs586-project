import { Tabs } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Account1Panel from './views/Account1Panel';
import Account2Panel from './views/Account2Panel';

const { TabPane } = Tabs;
function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Account 1" key="1">
            <Account1Panel></Account1Panel>
          </TabPane>
          <TabPane tab="Account 2" key="2">
            <Account2Panel></Account2Panel>
          </TabPane>
        </Tabs>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
