import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './foodlist.less'
class FoodList extends Component {
	constructor() {
		super(...arguments);
		this.state = {};
	}
	render () {
		let { selectCata, currentList } = this.props
		console.log(JSON.stringify(this.props.currentList))
		return (<View className='foodlist'>
			<Text>{selectCata ? selectCata.name : ''}</Text>
			<View className='foodlist_forlist'>
				{currentList.map((item, index) =>
					<View key={item.id} className='foodlist_item'>
						<img className='foodlist_item_img' src={item.img == 2 ? require('../../assets/img/2.jpg') : require('../../assets/img/1.jpg')
						} />
						<View className='foodlist_item_info'>
							<Text>{item.title}</Text>
							<Text>月售：{item.sale}</Text>
							<Text className='price'>￥{item.price}</Text>
						</View>

					</View>)}
			</View>
		</View>)
	}
}
export default FoodList;