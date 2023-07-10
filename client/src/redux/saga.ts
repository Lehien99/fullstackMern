import watchLoginRequest from "./saga/authSaga";
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([watchLoginRequest]);
}