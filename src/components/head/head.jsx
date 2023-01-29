import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Top from './top.jsx'
import './head.less'
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
				<img src={require('../../assets/img/back.jpg')} className='back' />
				<View className='store'>
					<img className="store_img" src={require('../../assets/img/store.jpg')} />
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
			</View>
		)
	}
}

export default Head