/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default class HomeNavs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
          <div className='home-nav'>
            <div className='index-nav-title'>
              <Link to='/classroom'>
                <img src={require('../../assets/img/breakfast.png')} alt=""/>
                <h4>秀早餐</h4>
              </Link>
            </div>
            <div className='index-nav-title'>
              <Link to='/kankan'>
                <img src={require('../../assets/img/lunch.png')} alt=""/>
                <h4>秀午餐</h4>
              </Link>
            </div>
            <div className='index-nav-title'>
              <Link to='/mall'>
                <img src={require('../../assets/img/super.png')} alt=""/>
                <h4>秀晚餐</h4>
              </Link>
            </div>
            <div className='index-nav-title'>
              <Link to='/mine'>
                <img src={require('../../assets/img/dinner.png')} alt=""/>
                <h4>秀夜宵</h4>
              </Link>
            </div>
          </div>
        )
    }
}