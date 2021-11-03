import { Table } from 'antd';

const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  // { title: 'Age', dataIndex: 'age', key: 'age' },
  // { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Edit</a>,
    edit: () => <a>Block</a>
  },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <a>Block | Unblock</a>
    //edit: () => <a>Block</a>
  }
];
// можно отсавить инфу о пользователях, и при нажатии на + будет выводить
const data = [
  {
    key: 1,
    name: 'Anna',
    rest: 32,
    position: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  },
  {
    key: 2,
    name: 'User 2',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
  },
  {
    key: 3,
    name: 'User 3',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable'
  },
  {
    key: 4,
    name: 'User 4',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
  }
];

export default function UserPageTable(): JSX.Element {
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: record => record.name !== 'Not Expandable'
        }}
        dataSource={data}
      />
      ,
    </>
  );
}
