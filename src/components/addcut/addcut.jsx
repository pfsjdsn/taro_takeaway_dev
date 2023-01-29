import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './addcut.less'
class AddCut extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            Num: 0
        };
    }
    // 减1
    CutFood () { }
    // 加1
    AddFood () { }
    render () {
        return (<View className='addcut'>
            <img onClick={this.CutFood.bind(this)} className='operate_img' src={require('../../assets/img/cut.png')} alt="" />
            <Text className='food_num'>{this.state.Num}</Text>
            <img onClick={this.AddFood.bind(this)} className='operate_img' src={require('../../assets/img/cut.png')} alt="" />

        </View>)
    }
}
export default AddCut;