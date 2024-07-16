import { handleActions } from 'redux-actions';
import {
    getSlides,
} from './actions';

const initialState = {
    slides: [],
    isFetching: false,
    error: null,
};

const slideReducer = handleActions(
    {
        [getSlides.request]: (state, { payload }) => ({
            ...state,
            isFetching:true,
        }),
        [getSlides.success]: (state, { payload }) => ({
            ...state,
            slides: payload,
            isFetching: false,
        }),
        [getSlides.failure]: (state, { payload }) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
    },
    initialState
);

export default slideReducer;
