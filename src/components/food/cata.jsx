import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './cata.less'
class Cata extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			selectCata: null,
			cata: [
				{ name: '专场', id: 1 },
				{ name: '热销', id: 2 },
				{ name: '折扣', id: 3 },
				{ name: '主食', id: 4 },
				{ name: '热炒', id: 5 },
				{ name: '凉菜', id: 6 },
				{ name: '特色乱炖', id: 7 },
			]
		};
	}
	clickHandle (item) {
		if (this.state.selectCata && this.state.selectCata.id !== item.id) {
			this.setState({ selectCata: item })
		}
		else if (!this.state.selectCata) {
			this.setState({ selectCata: item })
		}
	}
	render () {
		let { selectCata, cata } = this.state
		return (<View className='cata'>
			{cata.map((item, index) => <Text onClick={this.clickHandle.bind(this, item)}
				className={"cata_name" + ((selectCata && selectCata.id == item.id) ? 'select' : '')}
				key={item.id} > {item.name}</Text>)
			}
		</View>)
	}
}
export default Cata;