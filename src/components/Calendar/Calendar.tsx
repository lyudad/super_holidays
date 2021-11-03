import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

export default function DataPicker(): JSX.Element {
  const [line, setLine] = useState<Date[]>([]);

  return (
    <div>
      <div className="calendar-container">
        {line.length > 0 ? (
          <p className="text-center">
            <span className="bold">Start:</span> {line[0].toDateString()}
            &nbsp;|&nbsp;
            <span className="bold">End:</span> {line[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">
            <span className="bold">Today:</span> {new Date().toDateString()}
          </p>
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
    </div>
  );
}
