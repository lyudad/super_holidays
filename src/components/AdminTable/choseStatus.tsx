import { useState } from 'react';
import { axiosApiInstance } from 'api/axios';
import { Status } from 'redux/reducers/types';
import { Select, Button } from 'antd';

const { Option } = Select;

interface Props {
  type: Status;
  id: number;
  fetchData: () => void;
}

export default function ChoseStatus({
  type,
  id,
  fetchData
}: Props): JSX.Element {
  const [value, setValue] = useState<Status>(type);

  const onHandlerClick = async (idStatus: number, status: Status) => {
    try {
      await axiosApiInstance.patch(`booking/${idStatus}/status`, {
        status: status
      });
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  function handleChange(v: Status) {
    setValue(v);
  }
  return (
    <>
      <Select style={{ width: 120 }} onChange={handleChange} value={value}>
        <Option value={Status.PENDING}>{Status.PENDING}</Option>
        <Option value={Status.APPROVED}>{Status.APPROVED}</Option>
        <Option value={Status.REJECTED}>{Status.REJECTED}</Option>
      </Select>
      <Button onClick={() => onHandlerClick(id, value)}>Edit</Button>
    </>
  );
}
