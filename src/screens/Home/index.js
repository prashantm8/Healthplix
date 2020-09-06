import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { setValueBasedOnHeight } from '../../utils/deviceDimensions'


class Home extends Component {

    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           <Text style={{fontSize:setValueBasedOnHeight(20),fontWeight:'bold'}}>Home Screen</Text>
           </View>
        )
    }
}



export default Home