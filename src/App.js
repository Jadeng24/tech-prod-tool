import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import Landing from './Components/Landing/Landing.js';
import ComponentTool from './Components/ComponentTool/ComponentTool.js';
import BrandHeroComp from './Components/ComponentTool/BrandHeroComp/BrandHeroComp.js';
import StoryImageComp from './Components/ComponentTool/StoryImageComp/StoryImageComp.js';
import ShopTheLookComp from './Components/ComponentTool/ShopTheLookComp/ShopTheLookComp.js';


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
              <Route component={BrandHeroComp} path='/component/brand-hero' />
              <Route component={StoryImageComp} path='/component/story-image' />
              <Route component={ShopTheLookComp} path='/component/shop-the-look' />
              {/* <Route component={Settings} path='/settings' /> */}

            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
