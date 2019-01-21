import React, { Component } from 'react';
import Navbar from './components/Layouts/navbar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import ProjectSummary from './components/Project/projectsummary';


class App extends Component {

render() {
  return(
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path = '/' component = {Dashboard}/>
          <Route path = '/projectsummary' component = {ProjectSummary}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;