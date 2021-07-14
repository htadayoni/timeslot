import axios from 'axios';
import {store} from './../../../redux/store';
import { setTimeSlot } from '../../../redux/actions/timeslots';
import { transformSlotsTime } from '../../transformer/slots';

export const timesServices = {
  getTimeSlots: async () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3004/times')
      .then(function (response) {
        store.dispatch(setTimeSlot(transformSlotsTime(response.data)))
        resolve();
      })
      .catch(function (error) {
        reject({error: error.status, data: []});
      });
    });
  },

}