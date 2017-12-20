/**
 * Created by Tancky on 2017/12/20 0020.
 */

import React from 'react'
import './index.less'

export default class HomeContentBox extends React.Component {
  render() {
    return (
        <div className='home-content'>
          {this.props.children}
        </div>
    )
  }
}