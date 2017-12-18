/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { WingBlank } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './index.less'

export default class HomeSpecial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="home-special">
          <WingBlank>
            <div className="index-special-title">
              <h4>新鲜专题</h4>
              <span>查看全部</span>
            </div>
            <div className="index-special-pic">
              <Link to='/classroom'>
                <img src={require('../../assets/img/index_pic.jpg')} alt=""/>
                <p>蒸是最健康的烹调方式,听说会蒸的人身体都不差</p>
              </Link>
            </div>
            <div className="index-special-pic">
              <Link to='/classroom'>
                <img src={require('../../assets/img/index_pic2.jpg')} alt=""/>
                <p>雾霾模式多吃四色食物</p>
              </Link>
            </div>
            <div className="index-special-pic">
              <Link to='/classroom'>
                <img src={require('../../assets/img/index_pic.jpg')} alt=""/>
                <p>蒸是最健康的烹调方式,听说会蒸的人身体都不差</p>
              </Link>
            </div>
          </WingBlank>
        </div>
    )
  }
}