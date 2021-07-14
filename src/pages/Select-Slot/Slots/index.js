import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './../style.css';
import CompanySlot from '../../../components/containers/company-slot';
import { slotServices } from '../../../services/api/slots';

function Slots() {
  const timeSlot = useSelector(state => state.timeslot.timeslots)
  useEffect(() => {
    fetchSlotData();
  }, [])

  const fetchSlotData = async () => {
    await slotServices.getTimeSlots()
  }

  return (
    <div className="slots__container--area">
      { timeSlot.length > 0 &&
        timeSlot.map(item => {
          return <CompanySlot data={item} key={item.id} />
        })
      }
    </div>
  );
}

export default Slots;
