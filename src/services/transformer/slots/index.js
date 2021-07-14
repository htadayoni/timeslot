import moment from "moment";

export const transformSlotsTime = (data) => {
  let transformedData = [];

  data.map(field => {
    let newItem = {
      id: field.id,
      name: field.name,
      type: field.type,
      time_slots: []
    }

    field.time_slots.map(slot => {
      const date = moment(slot.start_time).format('YYYY-MM-DD');
      const hours = `${moment(slot.start_time).format('HH:mm')} - ${moment(slot.end_time).format('HH:mm')}`;
    
      if(!newItem.time_slots[date]) {
        newItem.time_slots[date] = []
      }
  
      newItem.time_slots[date].push({
        ...slot,
        date,
        hours
      })
    })
    

    transformedData.push(newItem);
  })

  return transformedData;
}