import React, { useState } from 'react';
import { Modal } from 'antd';
import { WrapperButton } from './style';
import Calendar from 'components/Calendar';
import { eng } from 'helpers/eng';

const day: Date = new Date();

type Visible = boolean;

export default function ModalCalendar(): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState<Visible>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <WrapperButton type="primary" onClick={showModal}>
        {eng.button__addHoliday}
      </WrapperButton>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Calendar dayToDay={day} />
      </Modal>
    </div>
  );
}
