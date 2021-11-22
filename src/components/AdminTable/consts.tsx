import { Button } from 'antd';
import ChoseType from './choseType';

export const data = [
  {
    key: 1,
    block: true,
    name: 'Ivan Ivanov',
    dates: '21.12.2021 -  25.12.20201',
    type: <ChoseType />,
    approve: false
  },
  {
    key: 2,
    block: true,
    name: 'Petr Petrov',
    dates: '21.12.2021 -  25.12.20201',
    type: <ChoseType />,
    approve: false
  },
  {
    key: 3,
    block: true,
    name: 'Anatoliy Sidorov',
    dates: '21.12.2021 -  25.12.20201',
    type: <ChoseType />,
    approve: true
  },
  {
    key: 4,
    block: true,
    name: 'Bill Heits',
    dates: '21.12.2021 -  25.12.20201',
    type: <ChoseType />
  }
];

const declineBtn = <Button danger>Decline</Button>;
const approveBtn = <Button>Approve</Button>;

export const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  { title: 'Dates', dataIndex: 'dates', key: 'data' },
  { title: 'Type', dataIndex: 'type', key: 'key' },
  {
    title: 'Action',
    dataIndex: 'approve',
    key: 'x',
    render: (decline: boolean): JSX.Element => {
      // функция- запрос на сервер с изменением статуса approve c true ?
      return <p>{decline ? declineBtn : approveBtn}</p>;
    }
  }
];
