import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'redux/selectors';
import Calendar from 'react-calendar';
import { Select, Modal } from 'antd';
import { InputWrapper, WrapperButton } from './styles';
import { eng } from 'helpers/eng';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import { onCreateBookingFromUser } from 'redux/reducers/action-creators';

interface DataPickerPropsProps {
  dayToDay: Date;
}
interface OnSubmit {
  start_day: string;
  end_day: string;
  type: string;
  status: string;
  userId: number | null;
}

export enum Status {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export enum VacationType {
  SICK_LEAVE = 'sick_leave',
  VACATION = 'vacation',
  OWN_EXPENSE = 'own expense'
}

type Visible = boolean;

export default function DataPicker({
  dayToDay
}: DataPickerPropsProps): JSX.Element {
  const dispatch = useDispatch();
  const stateUser = useSelector(selectors.getUser);

  const [line, setLine] = useState<Date[]>([]);
  const [value, setValue] = useState<string>(VacationType.VACATION);
  const [isModalVisible, setIsModalVisible] = useState<Visible>(false);

  function onChangeValue(e: string) {
    setValue(e);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onSubmitCalendar(): void {
    const date = new Date();

    if (line.length < 1) {
      return alert('error');
    }
    if (date >= line[0] || date >= line[1]) {
      return alert('error');
    }
    const start: string = line[0].toDateString();
    const end: string = line[1].toDateString();

    const event: OnSubmit = {
      start_day: start,
      end_day: end,
      type: value,
      status: Status.PENDING,
      userId: stateUser && stateUser.id
    };
    dispatch(onCreateBookingFromUser(event));
  }

  const handleOk = () => {
    setIsModalVisible(false);
    onSubmitCalendar();
  };

  return (
    <div>
      <WrapperButton type="primary" onClick={showModal}>
        {eng.button__addHoliday}
      </WrapperButton>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div className="calendar-container">
            {line.length > 0 ? (
              <>
                <InputWrapper
                  defaultValue="start"
                  value={line[0].toDateString()}
                />
                <InputWrapper
                  defaultValue="end"
                  value={line[1].toDateString()}
                />
              </>
            ) : (
              <InputWrapper
                defaultValue="today"
                value={dayToDay.toDateString()}
              />
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
          <Select
            value={value}
            onChange={onChangeValue}
            style={{ width: '30%' }}
          >
            <Select.Option value={VacationType.VACATION}>
              {' '}
              {VacationType.VACATION}
            </Select.Option>
            <Select.Option value={VacationType.SICK_LEAVE}>
              {VacationType.SICK_LEAVE}{' '}
            </Select.Option>
            <Select.Option value={VacationType.OWN_EXPENSE}>
              {VacationType.OWN_EXPENSE}{' '}
            </Select.Option>
          </Select>
        </div>
      </Modal>
    </div>
  );
}
