import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Head from '../../components/head/head'
import Food from '../../components/food/food'
import Bottom from '../../components/bottom/bottom'
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (

      <View className='index'>
        <Head />
        <Food />
        <Bottom />
      </View>
    )
  }
}
