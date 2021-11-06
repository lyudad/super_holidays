import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Select } from 'antd';
import { InputWrapper } from './styles';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
interface DataPickerPropsProps {
  dayToDay: Date;
}

export default function DataPicker({
  dayToDay
}: DataPickerPropsProps): JSX.Element {
  const [line, setLine] = useState<Date[]>([]);

  return (
    <div>
      <div className="calendar-container">
        {line.length > 0 ? (
          <>
            <InputWrapper defaultValue="start" value={line[0].toDateString()} />
            <InputWrapper defaultValue="end" value={line[1].toDateString()} />
          </>
        ) : (
          <InputWrapper defaultValue="today" value={dayToDay.toDateString()} />
        )}
        <Calendar
          onChange={setLine}
          selectRange={true}
          className={['c1', 'c2']}
          tileClassName={['c3', 'c4']}
          next2Label={null}
          prev2Label={null}
          locale="en-GB"
          navigationAriaLabel="Go up"
        />
      </div>
      <Select defaultValue="Vacation" style={{ width: '30%' }}>
        <Select.Option value="Vacation">Vacation</Select.Option>
        <Select.Option value="Sick leave">Sick leave </Select.Option>
      </Select>
    </div>
  );
}
