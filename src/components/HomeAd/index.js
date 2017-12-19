/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import './index.less'

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgHeight: 184
    }
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
              <a
                  href="http://www.baidu.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                    src={require('../../assets/img/banner.jpg')}
                    alt=""
                    // bug！解决刷新页面时轮播图片无高度的问题
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                />
              </a>
              <a
                  href="http://www.baidu.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                    src={require('../../assets/img/banner.jpg')}
                    alt=""
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                />
              </a>
              <a
                  href="http://www.baidu.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                    src={require('../../assets/img/banner.jpg')}
                    alt=""
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                />
              </a>
            </Carousel>
          </WingBlank>
        </div>
    )
  }
}