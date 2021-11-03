import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Calendar from '../Calendar';

export default function ModalCalendar(): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Button type="primary" onClick={showModal}>
        Open calendar
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Calendar />
      </Modal>
    </div>
  );
}
