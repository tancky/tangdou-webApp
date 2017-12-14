import React, {Component} from 'react';
import { Flex, SearchBar, WingBlank, WhiteSpace, Carousel } from 'antd-mobile';
import './App.less';

class App extends Component {
  render() {
    return (
        <div className='index-header'>
          <Flex align='center' justify='center' className='header-wrap'>
            <img className='i-plus' src={require('./assets/img/jiahao.png')} alt="首页导航栏分类Icon"/>
            <Flex.Item>
              <SearchBar className='search' placeholder="菜谱、食谱、用户等" />
            </Flex.Item>
            <img className='i-crumb' src={require('./assets/img/mianbaoxie.png')} alt="首页导航栏面包屑Icon"/>
            <img className='i-message' src={require('./assets/img/message-1.png')} alt="首页导航栏信封Icon"/>
          </Flex>
          <WhiteSpace size='lg' />
          <WingBlank>
            <Carousel
                className='my-carousel'
                autoplay={true}
                infinite
                selectedIndex={1}
            >
              <img src={require('./assets/img/banner.jpg')} alt=""/>
              <img src={require('./assets/img/banner.jpg')} alt=""/>
              <img src={require('./assets/img/banner.jpg')} alt=""/>
            </Carousel>
          </WingBlank>
        </div>
    );
  }
}

export default App;
