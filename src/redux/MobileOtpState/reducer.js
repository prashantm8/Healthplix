import { MobileOtp } from "./action";

const defaultState = {
    isLoading:false,
    otp_token:'',
    token:''
};

MobileOtpState = (state = defaultState, action) => {
    switch (action.type) {
        case MobileOtp.isLoading:
            return{
                ...state,
                isLoading:action.data
            }
        case MobileOtp.sendOTPSuccess:
            return{
                ...state,
                otp_token:action.data.otp_token
            }
        case MobileOtp.verifyOtpSuccess:
            return{
                ...state,
                token:action.data.token
            }
        default:
            return state;
    }
}

export default MobileOtpState;
