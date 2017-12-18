/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default class HomeSubNavs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="home-subnav">
          <div className="index-top-subnav">
            <Link to='/classroom'>
              <img src={require('../../assets/img/bake_2.png')} alt=""/>
            </Link>
            <Link to='/classroom'>
              <img src={require('../../assets/img/study.png')} alt=""/>
            </Link>
          </div>
          <div className="index-bottom-subnav">
            <Link to='/classroom'>
              <img src={require('../../assets/img/menu.png')} alt=""/>
            </Link>
            <Link to='/classroom'>
              <img src={require('../../assets/img/shop_2.png')} alt=""/>
            </Link>
            <Link to='/classroom'>
              <img src={require('../../assets/img/show.png')} alt=""/>
            </Link>
          </div>
        </div>
      )
  }
}