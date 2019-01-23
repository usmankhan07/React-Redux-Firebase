import React, { Component } from 'react';
import Navbar from './components/Layouts/navbar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import ProjectDetails from './components/Project/projectdetails';
import SignIn from './components/Auth/signin';


class App extends Component {

render() {
  return(
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path = '/' render = {(props) => {
            return (
              <div>
                <Dashboard/>
              </div>
            )
          }}/>
          <Route path = '/project/:id' component = {ProjectDetails}/>
          <Route path = '/signin' component = {SignIn}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;