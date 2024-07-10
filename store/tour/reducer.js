import {handleActions} from 'redux-actions';
import {
    getTours,
    getTour,
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
        [getTours.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),


    },
    initialState
);

export default tourReducer;
