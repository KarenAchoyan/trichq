import {handleActions} from 'redux-actions';
import {
    getBlogs,
    getBlog,
} from './actions';

const initialState = {
    blogs: [],
    selectedBlog: null,
    isFetching: true,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
};

const blogReducer = handleActions(
    {
        [getBlogs]: (state) => ({
            ...state,
            isFetching: true,
            error: null,
        }),
        [getBlog.request]: (state) => ({
            ...state,
            isFetching: true,
            error: null,
        }),

        [getBlogs.success]: (state, {payload}) => ({
            ...state,
            blogs: payload,
            isFetching: false,
        }),
        [getBlog.success]: (state, {payload}) => ({
            ...state,
            selectedBlog: payload,
            isFetching: false,
        }),
        [getBlog.success]: (state, {payload}) => ({
            ...state,
            selectedBlog: payload,
            isFetching: false,
        }),

        [getBlogs.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [getBlog.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),

    },
    initialState
);

export default blogReducer;
