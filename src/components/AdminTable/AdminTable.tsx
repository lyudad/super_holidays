import { Table } from 'antd';
import { data } from './consts';

const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  { title: 'Dates', dataIndex: 'dates', key: 'data' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  // { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (block: boolean) => {
      return <p>{block ? 'block' : 'unblock'}</p>;
    }
  }
];

// можно отсавить инфу о пользователях, и при нажатии на + будет выводить

export default function UserPageTable(): JSX.Element {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
