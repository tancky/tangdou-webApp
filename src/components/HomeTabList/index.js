/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import { withRouter } from 'react-router-dom' // react-router4.0新增的高阶组件，提供history，官方推荐做法
import { TabBar } from 'antd-mobile'
import { Menu } from "./Menu";
import './index.less'

class HomeTabList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedTab: 'tangdouTab',
    }
  }
  LinkTo(link, slt) {
    this.setState({
      selectedTab: slt
    })
    this.props.history.push(link)
  }

  render() {
    return (
        <div className="home-footer">
          <TabBar
              barTintColor='#f5f5f5'
              tintColor='#bd2122'
              unselectedTintColor='#666'
          >
            {
              Menu.map( m => {
                return (
                    <TabBar.Item
                        title={m.title}
                        key={m.key}
                        selected={this.state.selectedTab === m.selectedTab}
                        icon={m.icon}
                        selectedIcon={m.selectedIcon}
                        onPress={() => {
                          this.LinkTo(m.link, m.selectedTab)
                        }}
                    >
                      {this.props.children}
                    </TabBar.Item>
                )
              })
            }
          </TabBar>
        </div>
    )
  }
}

export default withRouter(HomeTabList)