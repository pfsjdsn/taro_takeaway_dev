import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import Cata from './cata'
class Food extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			current: 0,
			tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }]
		};
	}
	changeTab (value) {
		this.setState({ current: value })
	}
	render () {
		let { current, tabList } = this.state
		return (<View>
			<AtTabs current={current} tabList={tabList}
				onClick={this.changeTab.bind(this)}>
				<AtTabsPane><Cata /></AtTabsPane>
				<AtTabsPane>评价</AtTabsPane>
				<AtTabsPane>商家 </AtTabsPane>
			</AtTabs>

		</View >)
	}
}
export default Food;