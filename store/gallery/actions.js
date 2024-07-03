import { createAction } from 'redux-actions';

export const getGalleries = {
  request: createAction('GET_GALLERIES_REQUEST'),
  success: createAction('GET_GALLERIES_SUCCESS'),
  failure: createAction('GET_GALLERIES_FAILURE'),
};
