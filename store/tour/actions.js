import { createAction } from 'redux-actions';

export const getTours = {
  request: createAction('GET_TOURS_REQUEST'),
  success: createAction('GET_TOURS_SUCCESS'),
  failure: createAction('GET_TOURS_FAILURE'),
};

export const getToursWithCategory = {
  request: createAction('GET_TOURS_WITH_CATEGORY_REQUEST'),
  success: createAction('GET_TOURS_WITH_CATEGORY_SUCCESS'),
  failure: createAction('GET_TOURS_WITH_CATEGORY_FAILURE'),
};

export const getTour= {
  request: createAction('GET_TOUR_REQUEST'),
  success: createAction('GET_TOUR_SUCCESS'),
  failure: createAction('GET_TOUR_FAILURE'),
};

export const reservationTour= {
  request: createAction('RESERVATION_TOUR_REQUEST'),
  success: createAction('RESERVATION_TOUR_SUCCESS'),
  failure: createAction('RESERVATION_TOUR_FAILURE'),
};
