import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Tangdou from './containers/Tangdou'
import ClassRoom from './containers/ClassRoom'
import Kankan from './containers/Kankan'
import Mall from './containers/Mall'
import Mine from './containers/Mine'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Home>
            <Switch>
              <Route path="/" exact component={Tangdou} />
              <Route path="/classroom" component={ClassRoom} />
              <Route path="/kankan" component={Kankan} />
              <Route path="/mall" component={Mall} />
              <Route path="/mine" component={Mine} />
            </Switch>
          </Home>
        </Router>
    );
  }
}

