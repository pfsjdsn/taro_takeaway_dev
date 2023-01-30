import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { getAllFoodInfo, getEvent } from '../../utils/common';
import './bottom.less'
let events = getEvent()
class Bottom extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			Num: 0,
			// 配送费
			sendPrice: 4,
			supportTakeBySelf: false,
			// 起送费
			sendMustPrice: 20,
			// 总价
			allPrice: 0
		};
	}
	componentDidMount () {
		// 方法一 要获取整体的存储的菜品数据 进行计算
		// 方法二 获取计算好的 设置给state (此处用的第二种方法)
		let { allPrice, allNum } = getAllFoodInfo()
		this.setState({ Num: allNum, allPrice: allPrice })
		events.on('addcut', () => {
			// 菜品发生变化 
			let { allPrice, allNum } = getAllFoodInfo()
			this.setState({ Num: allNum, allPrice: allPrice })
		})
	}
	render () {
		let { allPrice, Num, sendPrice, supportTakeBySelf, sendMustPrice } = this.state
		return (<View className='bottom'>
			<View className='bottom_body'>
				{Num ? <Text className='num'>{Num}</Text> : null}
				<img className='store_img' src={Num > 0 ? require('../../assets/img/foodstore.png') : require('../../assets/img/emptystore.png')} />
				<View className='info'>
					{allPrice ? <Text className='price'>{'￥' + allPrice}</Text> : <Text>{sendPrice ? '另需配送费￥' + sendPrice + '|' : ''}</Text>}
					<Text>{supportTakeBySelf ? '支持自取' : '不支持自取'}</Text>
				</View>
				<View className='submit'>
					{allPrice > sendMustPrice ? <Text className='goPay'>去结算</Text> : <Text>{sendMustPrice ? '￥' + sendMustPrice + '起送' : ''}</Text>}
				</View>
			</View>

		</View>)
	}
}
export default Bottom;