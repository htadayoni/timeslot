import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveTimeSlot } from '../../../redux/actions/timeslots';
import * as utils from './../../../utils/utils'
import './style.css';

function TimeSlot({slotData, companyId, selectedData, status}) {
  const reservedSlot = useSelector(state => state.timeslot.reserved);
  const [isDisable, setIsDisable] = useState(false);
  const dispatch = useDispatch();

  const handleReserve = () => {
    if(status === 'deactive') return false;

    let newReservedData = [...reservedSlot];
    newReservedData = newReservedData.filter(item => item.companyId !== companyId);
    newReservedData.push({
      companyId,
      time: slotData
    })

    dispatch(reserveTimeSlot(newReservedData));
  }

  return (
    <div className={`timeSlots__item ${status}`} onClick={() => handleReserve()}>
      <span>{slotData.hours}</span>
    </div>
  );
}

export default TimeSlot;
