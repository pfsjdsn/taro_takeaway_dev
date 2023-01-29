import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './top.less'
class Top extends Component {

	render () {
		return (
			<View className="top">
				<View className='left'>
					<img src={require('../../assets/img/left.png')} />
				</View>
				<View className='right'>
					<img src={require('../../assets/img/search.png')} />
					<img src={require('../../assets/img/collect.png')} />
					<img src={require('../../assets/img/tuan.png')} />
					<img src={require('../../assets/img/lue.png')} />
				</View>

			</View>
		)
	}
}

export default Top