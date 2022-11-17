import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles'

const Template = () => {
  return (
    <View style={styles.container}>
    {/* <View style={{flex:1, backgroundColor: '#888'}}> */}
        <View style={{backgroundColor: 'red', flex:2}}/>
        <View style={{backgroundColor: 'pink', flex:10}}/>
        <View style={{backgroundColor: 'blue', flex:1}}/>
    </View>
  )
}

export default Template