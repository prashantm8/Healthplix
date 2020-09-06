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
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginBottom:setValueBasedOnHeight(20)
    },

    textStyle:{
        fontSize:setValueBasedOnHeight(14),
        fontWeight:'bold',
        marginRight:setValueBasedOnWidth(20)
    },
    buttonStyle:{
        backgroundColor: '#2f9ade',
        borderRadius: setValueBasedOnWidth(5),
        padding: setValueBasedOnHeight(15),
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontSize:setValueBasedOnHeight(14),
        fontWeight:'bold'
    },

    logo:{ height: setValueBasedOnHeight(64), width: setValueBasedOnWidth(261) ,position:'absolute',alignSelf:'center',top:setValueBasedOnHeight(100)},

    indicator:{alignSelf:'center',justifyContent:'center',alignItems:'center', position:'absolute'}
})

export default styles