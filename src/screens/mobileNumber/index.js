import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView,Platform, ActivityIndicator } from 'react-native'
import { logo } from '../../assets'
import styles from './styles'
import {connect} from 'react-redux'
import { sendOTP } from '../../redux/MobileOtpState/action'

class MobileNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileNumber: ''
        }
    }
    onSendOtpSuccess = () =>{
        const {mobileNumber} = this.state
        this.props.navigation.replace("Otp",{mobileNumber})
    }
    onSendOtp = ()=>{
        const {mobileNumber} = this.state
        mobileNumber.length<10?alert("Please enter valid mobile number"):this.props.sendOtp({
            "mobile_number": this.state.mobileNumber
        },this.onSendOtpSuccess)
    }
    render() {
        return (
            <>
            <View style={styles.containerStyle}>
                <View style={styles.numberContainer}>
                    <Text style= {styles.textStyle}>+91</Text>
                    <TextInput
                        placeholder={"Enter your mobile number"}
                        value={this.state.mobileNumber}
                        onChangeText={(text) => {
                            this.setState({
                                mobileNumber: text
                            })
                        }}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                </View>

                <TouchableOpacity
                    onPress={this.onSendOtp}

                    style={styles.buttonStyle}
                >
                    <Text style={styles.buttonText}>
                        Get OTP
                    </Text>

                </TouchableOpacity>
            </View>
            <Image
                style={styles.logo}
                source={logo}
                resizeMode="contain"
            />
            {this.props.isLoading?<View style={styles.indicator}>
            <ActivityIndicator color={'#2f9ade'} size={'large'}/>
            </View>:null}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendOtp: (request,callBack) => dispatch(sendOTP(request,callBack))
    }
};

const mapStateToProps = (state) => {   
    return {
        isLoading:state.MobileOtpState.isLoading
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MobileNumber)