import React, { useEffect, useMemo, useState } from 'react';
import { axiosApiInstance } from 'api/axios';
import { User } from 'redux/reducers/types';
import { Button, Table } from 'antd';
import { StyledInput } from './styles';

interface RenderUser {
  key: number;
  name: string;
  email: string;
  isBlocked: boolean;
}

export default function UsersTable(): JSX.Element {
  const [state, setState] = useState<User[]>([]);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await axiosApiInstance.get('users');
      setState(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFilterContacts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    if (query) {
      const normalizeFilter = query.toLowerCase();
      const filterValue = state.filter(
        ({ first_name, last_name }) =>
          first_name.toLowerCase().includes(normalizeFilter) ||
          last_name.toLowerCase().includes(normalizeFilter)
      );
      setState(filterValue);
    } else {
      fetchData();
    }
  };

  const renderUsers: RenderUser[] = useMemo(
    () =>
      state.map(user => {
        return {
          key: user.id,
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          isBlocked: user.isBlocked
        };
      }),
    [state]
  );

  const onHandlerClick = async (id: number, status: boolean) => {
    try {
      await axiosApiInstance.patch(`users/${id}/block`, { isBlocked: status });
      await fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    { title: 'User', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    {
      title: 'Status',
      dataIndex: 'isBlocked',
      render: (_: any, record: RenderUser): JSX.Element => {
        return record.isBlocked ? (
          <Button danger onClick={() => onHandlerClick(record.key, false)}>
            Unblock
          </Button>
        ) : (
          <Button onClick={() => onHandlerClick(record.key, true)}>
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
    <>
      <StyledInput
        type="search"
        value={query}
        onChange={onFilterContacts}
        placeholder="Search..."
      />
      <Table
        rowKey={record => record.key}
        columns={columns}
        dataSource={renderUsers}
      />
    </>
  );
}
