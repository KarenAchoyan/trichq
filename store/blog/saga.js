import {takeLatest, put, call} from 'redux-saga/effects';
import {
    getBlogs,
    getBlog, getRandBlogs,
} from './actions';
import axiosInstance from "configs/axiosIntance";

function* handleGetBlogs({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.get('/blogs', payload));
        const blogs = response.data;
        yield put(getBlogs.success(blogs));
    } catch (error) {
        yield put(getBlogs.failure(error.message));
    }
}
function* handleGetRandBlogs({payload = {}}) {
    try {
        const response = yield call(() => axiosInstance.get('/blogs/rand', payload));
        const blogs = response.data;
        yield put(getBlogs.success(blogs));
    } catch (error) {
        yield put(getBlogs.failure(error.message));
    }
}

function* fetchBlogSaga(action) {
    try {
        const {id} = action.payload;
        const blog = yield call(() => axiosInstance.get(`/blogs/${id}`, action.payload));
        yield put(getBlog.success(blog));
    } catch (error) {
        yield put(getBlog.failure(error.message));
    }
}


export default function* blogSaga() {
    yield takeLatest(getBlogs.request, handleGetBlogs);
    yield takeLatest(getBlog.request, fetchBlogSaga);
    yield takeLatest(getRandBlogs.request, handleGetRandBlogs);
}
