import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export const checkOverlap = (firstStart, firstEnd, secondStart, secondEnd) => {
  const overlap = moment.range(
    moment(firstStart),
    moment(firstEnd)
  ).overlaps(
    moment.range(
      moment(secondStart),
      moment(secondEnd)
    )
  )
    
  return overlap;
}