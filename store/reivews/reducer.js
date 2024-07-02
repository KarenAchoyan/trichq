import {handleActions} from 'redux-actions';
import {
    getReviews,
} from './actions';

const initialState = {
    reviews: [],
    isFetching: false,
    error: null,
};

const reviewReducer = handleActions(
    {
        [getReviews]: (state) => ({
            ...state,
            isFetching: true,
            error: null,
        }),
        [getReviews.success]: (state, {payload}) => ({
            ...state,
            reviews: payload,
            isFetching: false,
        }),

        [getReviews.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),

    },
    initialState
);

export default reviewReducer;
