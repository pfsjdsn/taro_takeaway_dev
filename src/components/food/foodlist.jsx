import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import AddCut from '../addcut/addcut'
import oneJpg from '../../assets/img/1.jpg'
import twoJpg from '../../assets/img/2.jpg'
import './foodlist.less'
class FoodList extends Component {
	constructor() {
		super(...arguments);
		this.state = {};
	}
	render () {
		let { selectCata, currentList } = this.props
		return (<View className='foodlist'>
			<Text>{selectCata ? selectCata.name : ''}</Text>
			<View className='foodlist_forlist'>
				{currentList.map((item, index) =>
					<View key={item.id} className='foodlist_item'>
						{
							process.env.TARO_ENV === 'h5' ?
								<img className='foodlist_item_img' src={item.img == 2 ? require('../../assets/img/2.jpg') : require('../../assets/img/1.jpg')} /> :
								<image className='foodlist_item_img' src={item.img == 2 ? oneJpg : twoJpg}></image>
						}
						<View View View className='foodlist_item_info' >
							<Text>{item.title}</Text>
							<Text>月售：{item.sale}</Text>
							<Text className='price'>￥{item.price}</Text>
							<AddCut food={item} />
						</View>

					</View>)
				}
			</View>
		</View >)
	}
}
export default FoodList;