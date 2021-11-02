import React, { useState } from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

export default function DateRangePickerCalendarExample(): JSX.Element {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus: any) => {
    setFocus(newFocus || START_DATE);
  };
  return (
    <div>
      <p>
        Selected start date:{' '}
        {startDate
          ? format(startDate, 'dd MMM yyyy', { locale: enGB })
          : 'none'}
        .
      </p>
      <p>
        Selected end date:{' '}
        {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
      </p>
      <p>Currently selecting: {focus}.</p>
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={enGB}
      />
    </div>
  );
}
