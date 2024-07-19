// reducer.js

import {handleActions} from 'redux-actions';
import {
    getContact,
} from './actions';

const initialState = {
    contact: null,
    isFetching: false,
    isUpdating: false,
    isDeleting: false,
    isInserting: false,
    error: null,
};

const contactReducer = handleActions(
    {
        [getContact.request]: (state) => ({
            ...state,
            isFetching: true,
            error: null,
        }),
        [getContact.success]: (state, {payload}) => ({
            ...state,
            contact: payload,
            isFetching: false,
        }),

        [getContact.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
    },
    initialState
);

export default contactReducer;
