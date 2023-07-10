import { IUserInfo } from 'types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthenState, IAuthResponse, initialAuthenState } from "types/redux";



const AuthenSlice = createSlice({
    name: "authen",
    initialState: initialAuthenState,
    reducers: {

        loginRequest: (state: IAuthenState, action: PayloadAction<IUserInfo>) => {

            state.isLoading = true;

            state.errMessage = ''

        },

        loginSucess: (state: IAuthenState, action: PayloadAction<IAuthResponse>) => {

            state.isLoading = false;

            // state.isAuthenticated = true;

            state.usernameInfo = { ...action.payload.DT };

        },

        loginFailure:(state:IAuthenState,action:PayloadAction<IAuthResponse>)=>{
            state.isLoading = false;

            state.errMessage = action.payload.EM;

        },
        loginSytemError:(state:IAuthenState)=>{
            state.isLoading = false;

            state.errMessage = 'Some thing wrong!';

        },

    }
})

export const {loginFailure,loginRequest,loginSucess, loginSytemError} = AuthenSlice.actions;

export default  AuthenSlice.reducer