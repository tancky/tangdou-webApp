/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { TabBar } from 'antd-mobile'
import './index.less'

export default class HomeFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedTab: 'tangdouTab'
    }
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
                selected={this.state.selectedTab === 'tangdouTab'}
                icon={<div className='tangdou-icon'/>}
                selectedIcon={<div className='tangdou-slt-icon'/>}
                onPress={() => {
                  this.setState({
                    selectedTab: 'tangdouTab',
                  });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                title='课堂'
                key='ketang'
                selected={this.state.selectedTab === 'classTab'}
                icon={<div className='ketang-icon'/>}
                selectedIcon={<div className='ketang-slt-icon'/>}
                onPress={() => {
                  this.setState({
                    selectedTab: 'classTab',
                  });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                title='侃侃'
                key='kankan'
                selected={this.state.selectedTab === 'kankanTab'}
                icon={<div className='kankan-icon'/>}
                selectedIcon={<div className='kankan-slt-icon'/>}
                onPress={() => {
                  this.setState({
                    selectedTab: 'kankanTab',
                  });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                title='商城'
                key='shopping'
                selected={this.state.selectedTab === 'mallTab'}
                icon={<div className='shopping-icon'/>}
                selectedIcon={<div className='shopping-slt-icon'/>}
                onPress={() => {
                  this.setState({
                    selectedTab: 'mallTab',
                  });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                title='我的'
                key='mine'
                selected={this.state.selectedTab === 'mineTab'}
                icon={<div className='mine-icon'/>}
                selectedIcon={<div className='mine-slt-icon'/>}
                onPress={() => {
                  this.setState({
                    selectedTab: 'mineTab',
                  });
                }}
            >
            </TabBar.Item>
          </TabBar>
        </div>
    )
  }
}