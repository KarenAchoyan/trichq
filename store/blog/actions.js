import { createAction } from 'redux-actions';

export const getBlogs = {
  request: createAction('GET_BLOGS_REQUEST'),
  success: createAction('GET_BLOGS_SUCCESS'),
  failure: createAction('GET_BLOGS_FAILURE'),
};

export const getBlog = {
  request: createAction('GET_BLOG_REQUEST'),
  success: createAction('GET_BLOG_SUCCESS'),
  failure: createAction('GET_BLOG_FAILURE'),
};
