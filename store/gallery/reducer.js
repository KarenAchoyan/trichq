import { handleActions } from 'redux-actions';
import {
    getGalleries,
} from './actions';

const initialState = {
    galleries: [],
    isFetching: false,
    error: null,
};

const galleryReducer = handleActions(
    {
        [getGalleries.success]: (state, { payload }) => ({
            ...state,
            galleries: payload,
            isFetching: false,
        }),
        [getGalleries.failure]: (state, { payload }) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
    },
    initialState
);

export default galleryReducer;
