import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Top from './top.jsx'
import Activity from './activity.jsx'
import './head.less'
import backJpg from '../../assets/img/back.jpg'
import storeJpg from '../../assets/img/store.jpg'

class Head extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			store: {
				title: 'abc菜馆',
				notice: '欢迎光临',
				tags: ["味道赞", '分量足', '健康'],
			}
		}
	}
	render () {
		let { store } = this.state
		return (
			<View className='head'>
				<Top />
				{process.env.TARO_ENV === 'h5' ?
					<img src={require('../../assets/img/back.jpg')} className='back' /> : <image src={backJpg} className='back' ></image>}

				<View className='store'>
					{process.env.TARO_ENV === 'h5' ?
						<img className="store_img" src={require('../../assets/img/store.jpg')} /> : <image src={storeJpg} className='store_img' ></image>}
					<View className='store_text'>
						<Text>{store.title}</Text>
						<Text>{store.notice}</Text>
						<View>
							{
								store.tags.map((item, index) =>
									<Text key={index} className="tags_text">{item}</Text>
								)
							}
						</View>
					</View>
				</View>
				<Activity />
			</View>
		)
	}
}

export default Head