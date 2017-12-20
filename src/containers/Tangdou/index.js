/**
 * Created by Tancky on 2017/12/20 0020.
 */
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import HomeAd from '../../components/HomeAd'
import HomeNavs from '../../components/HomeNavs'
import HomeSubNavs from '../../components/HomeSubNavs'
import HomeSpecial from '../../components/HomeSpecial'

export default class Tangdou extends React.Component {
  render() {
    return (
        <div>
          <HomeHeader />
          <HomeAd />
          <HomeNavs />
          <HomeSubNavs />
          <HomeSpecial />
        </div>
    )
  }
}

