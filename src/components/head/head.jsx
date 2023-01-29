import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Top from './top.jsx'
class Head extends Component {

	render () {
		return (
			<View className='head'>
				<Top />
				<Text>整体头部</Text>
			</View>
		)
	}
}

export default Head