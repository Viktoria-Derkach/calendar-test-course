import { Badge, Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
 events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
    return (
       <ul className="events" style={{listStyleType: 'none'}}>
        {currentDayEvents.map((ev, index) => (
          <li  key={index} >
            <Badge status='success' text={ev.description} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} />;
};

export default EventCalendar;
