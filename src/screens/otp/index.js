import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image,ActivityIndicator } from 'react-native'
import { logo } from '../../assets'
import styles from './styles'
import { setValueBasedOnWidth } from '../../utils/deviceDimensions'
import {connect} from 'react-redux'
import { verifyOtp, sendOTP } from '../../redux/MobileOtpState/action'

class OTP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileNumber: '',
            otp:[]
        }
        this.otpTextInput = [];
    }
    componentDidMount() {
        this.otpTextInput[0].focus()
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1].focus()
    }

    focusNext(index, value) {
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1].focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index].blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
    }

    onVerifySuccess = () => {
        this.props.navigation.replace("Home")
    }

    onClickVerify = () => {
        const {mobileNumber} =  this.props.route.params;
        let otp = this.state.otp.join('')
        otp && otp!='' && otp.length == 6?this.props.verifyOtp({
            "mobile_number": mobileNumber,
            "otp_token": this.props.otp_token,
            "otp":otp
        },this.onVerifySuccess):alert('please fill all the boxes')
    }

    onResendOtp = ()=>{
        const {mobileNumber} =  this.props.route.params;
        this.props.sendOtp({
            "mobile_number": mobileNumber
        },this.onSendOtpSuccess)
    }

    renderInputs = () => {
        const inputs = Array(6).fill(0);
        const txt = inputs.map(
            (i, j) => 
                <TextInput
                    style={styles.inputStyle}
                    key={j}
                    keyboardType="numeric"
                    onChangeText={text => this.focusNext(j, text)}
                    onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => this.otpTextInput[j] = ref}
                    maxLength={1}
                />
        );
        return txt
    }
    render() {
        const {mobileNumber} =  this.props.route.params;

        return (
            <>
            <View style={styles.containerStyle}>
                <Text style={styles.titleTextStyle}>Please enter OTP sent to</Text>
                <Text style={styles.numberTextStyle}>+91 {mobileNumber}</Text>
                <View style={styles.numberContainer}>
                    {this.renderInputs()}
                </View>
                <TouchableOpacity
                    onPress={this.onClickVerify}

                    style={styles.buttonStyle}
                >
                    <Text style={styles.buttonText}>
                        Verify
                    </Text>

                </TouchableOpacity>
                <Text style={styles.titleTextStyle}>Didn't recieve OTP?  
                <Text 
                onPress={this.onResendOtp}
                style={styles.link}>    Resend</Text>
                </Text>

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
        verifyOtp: (request,onVerifySuccess) => dispatch(verifyOtp(request,onVerifySuccess)),
        sendOtp: (request,callBack) => dispatch(sendOTP(request,callBack))

    }
};

const mapStateToProps = (state) => {   
    return {
        otp_token:state.MobileOtpState.otp_token,
        isLoading:state.MobileOtpState.isLoading
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(OTP)