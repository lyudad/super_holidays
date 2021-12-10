import React, { useEffect, useState } from 'react';
import { axiosApiInstance } from 'api/axios';
import { User } from 'redux/reducers/types';
import { Button, Table } from 'antd';
import { StyledInput } from './styles';

export default function UsersTable(): JSX.Element {
  const [searchData, setSearchData] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axiosApiInstance.get('users');
      setSearchData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFilterContacts = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      const normalizeFilter = e.currentTarget.value.toLowerCase();
      const filterValue = searchData.filter(
        ({ first_name, last_name }) =>
          first_name.toLowerCase().includes(normalizeFilter) ||
          last_name.toLowerCase().includes(normalizeFilter)
      );
      setSearchData(filterValue);
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
    {
      title: 'User',
      dataIndex: 'full name',
      render: (_: any, record: User): JSX.Element => {
        return (
          <div>
            {record.first_name} {record.last_name}
          </div>
        );
      }
    },
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
        onChange={onFilterContacts}
        placeholder="Search..."
      />
      <Table
        rowKey={record => record.id}
        columns={columns}
        dataSource={searchData}
      />
    </>
  );
}
