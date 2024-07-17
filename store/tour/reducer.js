import {handleActions} from 'redux-actions';
import {
    getTours,
    getTour, getToursWithCategory, reservationTour,
} from './actions';

const initialState = {
    tours: [],
    selectedTour: null,
    isFetching: true,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
};

const tourReducer = handleActions(
    {
        [getTours]: (state) => ({
            ...state,
            isFetching: true,
            error: null,
        }),
        [getTour]: (state) => ({
            ...state,
            isFetching: true,
            error: null,
        }),

        [getToursWithCategory.request]: (state) => ({
            ...state,
            isFetching: true,
            error: null,
        }),
        [reservationTour.request]: (state) => ({
            ...state,
            isAdding: true,
            error: null,
        }),

        [getTours.request]: (state, {payload}) => ({
            ...state,
            isFetching: true,
        }),
        [getTours.success]: (state, {payload}) => ({
            ...state,
            tours: payload,
            isFetching: false,
        }),
        [getTour.request]: (state, {payload}) => ({
            ...state,
            isFetching: true,
        }),
        [getTour.success]: (state, {payload}) => ({
            ...state,
            selectedTour: payload,
            isFetching: false,
        }),
        [getTour.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [getToursWithCategory.success]: (state, {payload}) => ({
            ...state,
            tours: payload,
            isFetching: false,
        }),
        [getToursWithCategory.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [reservationTour.success]: (state, {payload}) => ({
            ...state,
            isAdding: true,
        }),
        [reservationTour.failure]: (state, {payload}) => ({
            ...state,
            isAdding: false,
            error: payload,
        }),
        [getTours.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),


    },
    initialState
);

export default tourReducer;
