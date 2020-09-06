import { StyleSheet } from 'react-native';
import { setValueBasedOnWidth, setValueBasedOnHeight } from '../../utils/deviceDimensions';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        padding: setValueBasedOnWidth(20)
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },

    textStyle:{
        fontSize:setValueBasedOnHeight(14),
        fontWeight:'bold',
        marginRight:setValueBasedOnWidth(20)
    },
    titleTextStyle:{
        fontSize:setValueBasedOnHeight(16),
        marginBottom:setValueBasedOnHeight(5),
        alignSelf:'center',
        color:'grey'
    },
    numberTextStyle:{
        fontSize:setValueBasedOnHeight(16),
        fontWeight:'bold',
        alignSelf:'center'
    },

    buttonStyle:{
        marginTop:setValueBasedOnHeight(15),
        backgroundColor: '#2f9ade',
        borderRadius: setValueBasedOnWidth(5),
        padding: setValueBasedOnHeight(15),
        justifyContent:'center',
        alignItems:'center',
        marginBottom:setValueBasedOnHeight(20)
    },
    buttonText:{
        color:'white',
        fontSize:setValueBasedOnHeight(14),
        fontWeight:'bold'
    },

    logo:{ height: setValueBasedOnHeight(64), width: setValueBasedOnWidth(261) ,position:'absolute',alignSelf:'center',top:setValueBasedOnHeight(100)},

    inputStyle:{borderBottomWidth:1,borderBottomColor:'grey',marginHorizontal:setValueBasedOnWidth(3),textAlign:'center',padding:setValueBasedOnWidth(10)},

    link:{
        color:'#2f9ade'
    },

    indicator:{alignSelf:'center',justifyContent:'center',alignItems:'center', position:'absolute'},
   
})

export default styles