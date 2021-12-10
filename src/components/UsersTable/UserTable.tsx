import React, { useEffect, useState } from 'react';
import { axiosApiInstance } from 'api/axios';
import { User } from 'redux/reducers/types';
import { Button, Table } from 'antd';
import { StyledInput } from './styles';

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
    setQuery(e.target.value);
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

  const onHandlerClick = async (id: number, status: boolean) => {
    try {
      await axiosApiInstance.patch(`users/${id}/block`, { isBlocked: status });
      await fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    { title: 'Name', dataIndex: 'first_name' },
    { title: 'Surname', dataIndex: 'last_name' },
    { title: 'Email', dataIndex: 'email' },
    {
      title: 'Status',
      dataIndex: 'isBlocked',
      render: (_: any, record: User): JSX.Element => {
        return record.isBlocked ? (
          <Button danger onClick={() => onHandlerClick(record.id, false)}>
            Unblock
          </Button>
        ) : (
          <Button onClick={() => onHandlerClick(record.id, true)}>Block</Button>
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
        type="text"
        value={query}
        onChange={onFilterContacts}
        placeholder="Search..."
      />
      <Table
        rowKey={record => record.id}
        columns={columns}
        dataSource={state}
      />
    </>
  );
}
