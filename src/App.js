import React from 'react'
import './default.scss'
import Homepage from './pages/Homepages';
import {Route, Switch} from 'react-router-dom'
import Registration from './pages/Registration';
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout';
import Login from './pages/Login';

function App() { 

  
  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Route path='/' exact render={() => (
            <HomepageLayout>
              <Homepage/>
            </HomepageLayout>
          )}/>
          <Route path='/registration' exact  render={() => (
            <HomepageLayout>
              <Registration/>
            </HomepageLayout>
          )}/>
          <Route path='/login' exact  render={() => (
            <HomepageLayout>
              <Login/>
            </HomepageLayout>
          )}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
