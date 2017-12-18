/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { TabBar } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './index.less'

export default class HomeSpecial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
        <div className="home-footer">
          <TabBar
              barTintColor='#f5f5f5'
              tintColor='#bd2122'
              unselectedTintColor='#666'
          >
            <TabBar.Item
                title='糖豆'
                key='tangdou'
                selected={true}
                icon={<div className='tangdou-icon'/>}
                selectedIcon={<div className='tangdou-slt-icon'/>}
            >
            </TabBar.Item>
            <TabBar.Item
                title='课堂'
                key='ketang'
                icon={<div className='ketang-icon'/>}
                selectedIcon={<div className='ketang-slt-icon'/>}
            >
            </TabBar.Item>
            <TabBar.Item
                title='侃侃'
                key='kankan'
                icon={<div className='kankan-icon'/>}
                selectedIcon={<div className='kankan-slt-icon'/>}
            >
            </TabBar.Item>
            <TabBar.Item
                title='商城'
                key='shopping'
                icon={<div className='shopping-icon'/>}
                selectedIcon={<div className='shopping-slt-icon'/>}
            >
            </TabBar.Item>
            <TabBar.Item
                title='我的'
                key='mine'
                icon={<div className='mine-icon'/>}
                selectedIcon={<div className='mine-slt-icon'/>}
            >
            </TabBar.Item>
          </TabBar>
        </div>
    )
  }
}