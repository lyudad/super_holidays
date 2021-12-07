import { useDispatch, useSelector } from 'react-redux';

import { onUpdateBlock } from 'redux/reducers/action-creators';
import selectors from 'redux/selectors';

import { Button, Table } from 'antd';

interface User {
  key: number;
  name: string;
  email: string;
  isBlocked: boolean;
}

export default function UsersTable(): JSX.Element {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectors.getAllUsers);
  console.log(allUsers);

  const renderUsers: User[] = allUsers.map(user => {
    return {
      key: user.id,
      name: `${user.first_name} ${user.last_name}`,
      email: user.email,
      isBlocked: user.isBlocked
    };
  });

  const columns = [
    { title: 'User', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    {
      title: 'Status',
      dataIndex: 'isBlocked',
      render: (_: any, record: User): JSX.Element => {
        return record.isBlocked ? (
          <Button
            onClick={() => {
              dispatch(onUpdateBlock({ id: record.key, isBlocked: false }));
            }}
          >
            Unblock
          </Button>
        ) : (
          <Button
            danger
            onClick={() => {
              dispatch(onUpdateBlock({ id: record.key, isBlocked: true }));
            }}
          >
            Block
          </Button>
        );
      }
    },
    {
      title: 'Action',
      dataIndex: 'key',
      key: 'x',
      render: () => <a>Edit</a>
    }
  ];

  return (
    <Table
      rowKey={record => record.key}
      columns={columns}
      dataSource={renderUsers}
    />
  );
}
