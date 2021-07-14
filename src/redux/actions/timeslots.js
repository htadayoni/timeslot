import {
  SET_TIME_SLOT,
  RESERVE_TIME_SLOT
} from './../types';

export const setTimeSlot = (payload) => ({
  type: SET_TIME_SLOT,
  payload
});

export const reserveTimeSlot = (payload) => ({
  type: RESERVE_TIME_SLOT,
  payload
});