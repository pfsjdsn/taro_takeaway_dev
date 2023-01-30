import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'

class Child extends Component {
	clickHandle () {
		this.props.onchange()
	}
	render () {
		return (
			<View>
				<Button onClick={this.clickHandle.bind(this)}>调用父组件事件</Button>
				{this.props.name}
			</View>
		)
	}
}
Child.defaultProps = {
	name: '124',
	onchange: null
}
export default Child