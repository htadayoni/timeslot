import {
  SET_TIME_SLOT,
  RESERVE_TIME_SLOT
} from "../types";

const initialState = {
  timeslots: [],
  reserved: []
};

export const timeslot = (state = initialState, action) => {

  switch (action.type) {
    case SET_TIME_SLOT:
      return {
        ...state,
        timeslots: action.payload
      };
    case RESERVE_TIME_SLOT:
      return {
        ...state,
        reserved: action.payload
      };
    default :
      return state
  }

};
