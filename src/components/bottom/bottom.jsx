import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './bottom.less'
class Bottom extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			Num: 0,
			// 配送费
			sendPrice: 4,
			supportTakeBySelf: false,
			// 起送费
			sendMustPrice: 20
		};
	}
	render () {
		let { Num, sendPrice, supportTakeBySelf, sendMustPrice } = this.state
		return (<View className='bottom'>
			<View className='bottom_body'>
				{Num ? <Text className='num'>{Num}</Text> : null}
				<img className='store_img' src={require('../../assets/img/emptystore.png')} />
				<View className='info'>
					<Text>{sendPrice ? '另需配送费￥ |' + sendPrice : ''}</Text>
					<Text>{supportTakeBySelf ? '支持自取' : '不支持自取'}</Text>
				</View>
				<View className='submit'>
					<Text>{sendMustPrice ? '￥' + sendMustPrice + '起送' : ''}</Text>
				</View>
			</View>

		</View>)
	}
}
export default Bottom;