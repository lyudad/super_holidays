import { Table } from 'antd';
import { data } from './consts';

const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Edit</a>,
    edit: () => <a>Block</a>
  },
  {
    title: 'Block',
    dataIndex: '',
    onClick: () => alert('!'),
    key: 'x',
    render: () => <a>Block</a>
  }
];

// можно отсавить инфу о пользователях, и при нажатии на + будет выводить

export default function UserPageTable(): JSX.Element {
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable'
        }}
        dataSource={data}
      />
      ,
    </>
  );
}
