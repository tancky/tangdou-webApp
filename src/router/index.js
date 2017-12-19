/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import ClassRoom from '../containers/ClassRoom'
import Kankan from '../containers/Kankan'
import Mall from '../containers/Mall'
import Mine from '../containers/Mine'


export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={ Home }></Route>
            <Route path="/classRoom" component={ ClassRoom }></Route>
            <Route path="/kankan" component={ Kankan }></Route>
            <Route path="/mall" component={ Mall }></Route>
            <Route path="/mine" component={ Mine }></Route>
          </div>
        </Router>
    )
  }
}