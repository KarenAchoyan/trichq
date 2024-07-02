import { createAction } from 'redux-actions';

export const getReviews = {
  request: createAction('GET_REVIEWS_REQUEST'),
  success: createAction('GET_REVIEWS_SUCCESS'),
  failure: createAction('GET_REVIEWS_FAILURE'),
};

