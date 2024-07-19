import {createAction} from "redux-actions";

export const getContact = {
  request: createAction('GET_CONTACT_REQUEST'),
  success: createAction('GET_CONTACT_SUCCESS'),
  failure: createAction('GET_CONTACT_FAILURE'),
};

