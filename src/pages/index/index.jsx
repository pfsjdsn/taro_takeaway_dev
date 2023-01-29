import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Head from '../../components/head/head'
import Food from '../../components/food/food'
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
      </View>
    )
  }
}
