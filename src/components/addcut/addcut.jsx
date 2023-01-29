import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { getFoodCount, setFoodCount } from '../../utils/common'
import './addcut.less'
class AddCut extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            Num: 0
        };
    }
    componentDidMount () {
        this.setState({ Num: getFoodCount(this.props.food) })
    }
    // 减1
    CutFood () {
        if (this.props.Num > 0) {
            setFoodCount(this.props.food, this.state.Num, 'cut', () => {
                this.setState({ Num: getFoodCount(this.props.food) })
            })
        }
        else {
            console.error('当前加减菜品出现异常')
        }
    }
    // 加1
    AddFood () {
        if (this.props.food) {
            setFoodCount(this.props.food, this.state.Num, 'add', () => {
                this.setState({ Num: getFoodCount(this.props.food) })
            })
        }
    }
    render () {
        let { Num } = this.setState
        let hideClass = Num > 0 ? '' : 'hide'
        return (<View className='addcut'>
            <img onClick={this.CutFood.bind(this)} className={'operate_img ' + hideClass} src={require('../../assets/img/cut.png')} alt="" />
            <Text className={'food_num ' + hideClass}>{this.state.Num}</Text>
            <img onClick={this.AddFood.bind(this)} className='operate_img' src={require('../../assets/img/add.png')} alt="" />

        </View>)
    }
}
export default AddCut;