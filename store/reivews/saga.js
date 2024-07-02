import {takeLatest, put, call} from 'redux-saga/effects';
import {
    getBlogs,
    getBlog, getReviews,
} from './actions';
import axiosInstance from "configs/axiosIntance";

function* handleGetReviews({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.get('/reviews', payload));
        const reviews = response.data;
        yield put(getReviews.success(reviews));
    } catch (error) {
        yield put(getReviews.failure(error.message));
    }
}


export default function* reviewSaga() {
    yield takeLatest(getReviews.request, handleGetReviews);
}
