import {takeLatest, put, call} from 'redux-saga/effects';
import {
    getTours, getTour, getToursWithCategory, reservationTour,
} from './actions';
import axiosInstance from "configs/axiosIntance";

function* handleGetTours({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.get('/tours', payload));
        const blogs = response.data;
        yield put(getTours.success(blogs));
    } catch (error) {
        yield put(getTours.failure(error.message));
    }
}

function* fetchTourSaga(action) {
    try {
        const {id} = action.payload;
        const blog = yield call(() => axiosInstance.get(`/tours/${id}`, action.payload));
        yield put(getTour.success(blog));
    } catch (error) {
        yield put(getTour.failure(error.message));
    }
}

function* fetchTourWithCategorySaga(action) {
    try {
        const {id} = action.payload;
        const blog = yield call(() => axiosInstance.get(`/category/${id}`, action.payload));
        yield put(getToursWithCategory.success(blog));
    } catch (error) {
        yield put(getToursWithCategory.failure(error.message));
    }
}

function* fetchToReservationTour(action) {
    try {
        const {id} = action.payload;
        const blog = yield call(() => axiosInstance.post(`/reservation/${id}`, action.payload));
        yield put(reservationTour.success(blog));
    } catch (error) {
        yield put(reservationTour.failure(error.message));
    }
}


export default function* tourSaga() {
    yield takeLatest(getTours.request, handleGetTours);
    yield takeLatest(getTour.request, fetchTourSaga);
    yield takeLatest(getToursWithCategory.request, fetchTourWithCategorySaga);
    yield takeLatest(reservationTour.request, fetchToReservationTour);
}
