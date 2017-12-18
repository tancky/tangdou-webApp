/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import './index.less'

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
        <div className='home-swiper'>
          {/*广告图*/}
          <WingBlank>
            <Carousel
                autoplay={true}
                infinite
                selectedIndex={1}
            >
              <img src={require('../../assets/img/banner.jpg')} alt=""/>
              <img src={require('../../assets/img/banner.jpg')} alt=""/>
              <img src={require('../../assets/img/banner.jpg')} alt=""/>
            </Carousel>
          </WingBlank>
        </div>
    )
  }
}