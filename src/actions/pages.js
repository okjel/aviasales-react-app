import actionTypes from './action-types';

export const showMore = () => ({ type: actionTypes.showMore });

export const setShowMoreBtn = (value) => ({ type: actionTypes.setShowMoreBtn, payload: value });
