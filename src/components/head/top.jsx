import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './top.less'
import leftPng from '../../assets/img/left.png'
import searchPng from '../../assets/img/search.png'
import collectPng from '../../assets/img/collect.png'
import tuanPng from '../../assets/img/tuan.png'
import luePng from '../../assets/img/lue.png'
class Top extends Component {

	render () {
		return (
			<View className="top">
				<View className='left'>
					{process.env.TARO_ENV === 'h5' ?
						<img src={require('../../assets/img/left.png')} /> : <image src={leftPng}  ></image>}
				</View>
				<View className='right'>
					{process.env.TARO_ENV === 'h5' ?
						<img src={require('../../assets/img/search.png')} /> : <image src={searchPng}  ></image>}
					{process.env.TARO_ENV === 'h5' ?
						<img src={require('../../assets/img/collect.png')} /> : <image src={collectPng}  ></image>}
					{process.env.TARO_ENV === 'h5' ?
						<img src={require('../../assets/img/tuan.png')} /> : <image src={tuanPng}  ></image>}
					{process.env.TARO_ENV === 'h5' ?
						<img src={require('../../assets/img/lue.png')} /> : <image src={luePng}  ></image>}
				</View>

			</View>
		)
	}
}

export default Top