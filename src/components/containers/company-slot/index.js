import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import TimeSlot from '../../common/time-slot';
import * as utils from './../../../utils/utils';
import moment from 'moment';

function CompanySlot({data}) {
  const reservedSlot = useSelector(state => state.timeslot.reserved);
  const [reservedTime, setReservedTime] = useState()
  const [othersReservedTime, setOthersReservedTime] = useState()

  useEffect(() => {
    setReservedTime(reservedSlot.filter(item => item.companyId === data.id));
    setOthersReservedTime(reservedSlot.filter(item => item.companyId !== data.id));
  }, [reservedSlot])

  return (
    <div className="company__slot--area">
      <div className="company__name">{data.name}</div>
      <div className="company__reserved">
        <span>Reservation</span>
        <span className="company__reservedTime">{reservedTime && reservedTime.length ? reservedTime[0].time.hours : '-'}</span>
      </div>
      <div className="slots__area">
        {
          Object.entries(data.time_slots).map(([key,value]) => {
            return <div key={key}>
              <div className="slots__day">{moment(key).format('ddd')}</div>
              <div className="slots__hours">
              { value.map(slot => {
                let hasOverlap = false;
                if(othersReservedTime && othersReservedTime.length){
                  othersReservedTime.map(item => {
                    const checkOverlap = utils.checkOverlap(slot.start_time, slot.end_time, item.time.start_time, item.time.end_time)
                    if(checkOverlap) hasOverlap = true;
                  })
                }
                const status = (reservedTime && reservedTime.length && reservedTime[0].time.start_time === slot.start_time) ? 'reserved' : hasOverlap ? 'deactive' : 'active'
                return <TimeSlot slotData={slot} companyId={data.id} key={slot.start_time} selectedData={reservedTime} status={status} />
              })}
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default CompanySlot;
