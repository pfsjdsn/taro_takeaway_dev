import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './bottom.less'
class Bottom extends Component {
	constructor() {
		super(...arguments);
		this.state = {};
	}
	render () {
		return (<View className='bottom'>
			<View className='bottom_body'>
				<img className='store_img' src={require('../../assets/img/emptystore.png')} />
				<View className='info'>
					<Text>另需配送费￥3</Text>
					<Text>支持自取</Text>
				</View>
				<View className='submit'>
					<Text>￥3起送</Text>
				</View>
			</View>

		</View>)
	}
}
export default Bottom;