/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react'
import HomeTabList from '../../components/HomeTabList'
import HomeContentBox from '../../components/HomeContentBox'
import './index.less'

class Home extends React.Component {
    render() {
      return (
            <div className='home-wrap'>
              <HomeTabList>
                <HomeContentBox>
                  {this.props.children}
                </HomeContentBox>
              </HomeTabList>
            </div>
      )
    }

}

export default Home





