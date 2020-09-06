
import Axios from 'axios';
import { BASE_URL } from '../../utils/Constants';

export const MobileOtp = {
    sendOTPSuccess: 'sendOTPSuccess/MobileOtp',
    isLoading: 'isLoading/MobileOtp',
    verifyOtpSuccess: 'verifyOtpSuccess/MobileOtp'
};

export const sendOtpSuccess = (data) => ({
    type: MobileOtp.sendOTPSuccess,
    data
})

export const verifyOtpSuccess = (data) => ({
    type: MobileOtp.verifyOtpSuccess,
    data
})

export const isLoading = (data) => ({
    type: MobileOtp.isLoading,
    data
})

export function sendOTP(request,onSendOtpSuccess) {
    return (dispatch, getState) => {
        dispatch(isLoading(true));
        Axios.post(BASE_URL+"sendOtp.php",request).then((resp)=>{
            dispatch(sendOtpSuccess(resp.data))
            onSendOtpSuccess && onSendOtpSuccess()
            dispatch(isLoading(false))
        }).catch((err) => {
            alert("error is: "+err.toString())
            dispatch(isLoading(false));
        })
    }
}

export function verifyOtp(request,onverifyOtpSuccess) {
    return (dispatch, getState) => {
        dispatch(isLoading(true));
        Axios.post(BASE_URL+"verifyOtp.php",request).then((resp)=>{
            dispatch(verifyOtpSuccess(resp.data))
            resp.data.token && resp.data.token != ''? onverifyOtpSuccess && onverifyOtpSuccess():alert('otp is not valid')
            dispatch(isLoading(false))
        }).catch((err) => {
            alert("error is: "+err.toString())
            dispatch(isLoading(false));
        })
    }
}

