import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing.js';
import ComponentTool from './Components/ComponentTool/ComponentTool.js';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>

          <Router>

            <Switch>
              {/*===| Routes |=================================*/}
              <Route component={Landing} exact path='/' />
              <Route component={ComponentTool} path='/component-tool' />
              {/* <Route component={Settings} path='/settings' /> */}

            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
