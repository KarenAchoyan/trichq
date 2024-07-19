import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getContact,
} from './actions';
import axiosInstance from "configs/axiosIntance";


function* fetchContactSaga() {
  try {
    const response = yield call(() => axiosInstance.get('/contacts'));
    const contact = response.data;
    yield put(getContact.success(contact));
  } catch (error) {
    yield put(getContact.failure(error.message));
  }
}


export function* contactSaga() {
  yield takeLatest(getContact.request, fetchContactSaga);
}