import {takeLatest, call, put} from 'redux-saga/effects';
import {
    getGalleries,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

// Slide Sagas
function* fetchGalleriesSaga({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.get('/galleries', payload));
        const slides = response.data;
        yield put(getGalleries.success(slides));
    } catch (error) {
        yield put(getGalleries.failure(error.message));
    }
}

// Slide Watcher Saga
export function* gallerySaga() {
    yield takeLatest(getGalleries.request, fetchGalleriesSaga);
}
