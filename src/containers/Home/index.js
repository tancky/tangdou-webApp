/**
 * Created by Tancky on 2017/12/18 0018.
 */
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import HomeAd from '../../components/HomeAd';
import HomeNavs from '../../components/HomeNavs';
import HomeSubNavs from '../../components/HomeSubNavs';
import HomeSpecial from '../../components/HomeSpecial';
import HomeFooter from '../../components/HomeFooter';
import './index.less';

const Home = () => {
    return (
        <div className='home-wrap'>
          <HomeHeader />
          <HomeAd />
          <HomeNavs />
          <HomeSubNavs />
          <HomeSpecial />
          <HomeFooter />
        </div>
    )
}

export default Home





