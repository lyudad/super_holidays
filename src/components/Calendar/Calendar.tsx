import { useState } from 'react';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import Calendar from 'react-calendar';
import { Select, Modal } from 'antd';
import { InputWrapper, WrapperButton } from './styles';
import { eng } from 'helpers/eng';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

interface DataPickerPropsProps {
  dayToDay: Date;
}
interface OnSubmit {
  start_day: string;
  end_day: string;
  type: string;
  status: string;
  id: number | null;
}

type Visible = boolean;

export default function DataPicker({
  dayToDay
}: DataPickerPropsProps): JSX.Element {
  const stateUser = useSelector(selectors.getUser);

  const [line, setLine] = useState<Date[]>([]);
  const [value, setValue] = useState<string>('Vacation');
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
    const date = new Date().toLocaleDateString();

    if (date > line[0].toLocaleDateString()) {
      return alert('error');
    }
    const start: string = line[0]
      .toLocaleDateString()
      .split('/')
      .reverse()
      .join('/');
    console.log(start);
    const end: string = line[1]
      .toLocaleDateString()
      .split('/')
      .reverse()
      .join('/');
    const event: OnSubmit = {
      start_day: start,
      end_day: end,
      type: value,
      status: 'pending',
      id: stateUser && stateUser.id
    };
    console.log(event);
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
            <Select.Option value="Vacation">Vacation</Select.Option>
            <Select.Option value="Sick leave">Sick leave </Select.Option>
          </Select>
        </div>
      </Modal>
    </div>
  );
}
