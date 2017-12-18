/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { Flex, SearchBar } from 'antd-mobile'
import './index.less'

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
        <div className='home-header'>
          {/*首页头部*/}
          <Flex align='center' justify='center'>
            <img className='i-plus' src={require('../../assets/img/jiahao.png')} alt="首页导航栏分类Icon"/>
            <Flex.Item>
              <SearchBar className='search' placeholder="菜谱、食谱、用户等"/>
            </Flex.Item>
            <img className='i-crumb' src={require('../../assets/img/mianbaoxie.png')} alt="首页导航栏面包屑Icon"/>
            <img className='i-message' src={require('../../assets/img/message-1.png')} alt="首页导航栏信封Icon"/>
          </Flex>
        </div>
    )
  }
}