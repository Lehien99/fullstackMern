
import { PayloadAction } from '@reduxjs/toolkit'
import { takeEvery, call, put } from 'redux-saga/effects'
import { loginFailure, loginRequest, loginSucess, loginSytemError } from 'redux/slice'
import { authService } from 'services';
import { IAuthResponse, IInitLoginValues } from 'types'


export function* handleLogin(action: PayloadAction<IInitLoginValues>) {
    try {

        const response: IAuthResponse = yield call(authService.login, action.payload);

        if (response.EC === 0) {

            yield put(loginSucess(response))

        } else {

            yield put(loginFailure(response))

        }
    } catch (error) {

        yield put(loginSytemError())

    }
}


export default function* watchLoginRequest() {
    yield takeEvery(loginRequest.toString(), handleLogin)
}