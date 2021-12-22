import React, { useCallback, useEffect, Dispatch, SetStateAction } from 'react';
import { axiosApiInstance } from 'api/axios';
import { User } from 'redux/reducers/types';
import { Table, Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ChoseStatus from './choseStatus';
import { nanoid } from 'nanoid';

interface Props {
  searchData: User[];
  setSearchData: Dispatch<SetStateAction<User[]>>;
}

export default function UsersTable({
  searchData,
  setSearchData
}: Props): JSX.Element {
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axiosApiInstance.get('users');
      setSearchData(data);
    } catch (e) {
      console.log(e);
    }
  }, [setSearchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  const columns = [
    {
      title: 'User',
      dataIndex: 'full name',
      filterIcon: () => {
        return <SearchOutlined />;
      },
      filterDropdown: () => {
        return (
          <Input
            type="text"
            onChange={onFilterContacts}
            placeholder="Search..."
          />
        );
      },
      render: (_: any, record: User): JSX.Element => {
        return (
          record.dates[0] && (
            <div>
              <Typography.Title level={5}>
                {record.first_name} {record.last_name}
              </Typography.Title>
            </div>
          )
        );
      }
    },
    {
      title: 'Dates',
      dataIndex: 'dates',
      render: (_: any, record: User): JSX.Element => {
        return (
          record.dates[0] && (
            <>
              {record.dates.map(e => {
                return (
                  <div key={nanoid()}>
                    <Typography.Title level={5}>
                      {e.start_day} - {e.end_day}
                    </Typography.Title>
                  </div>
                );
              })}
            </>
          )
        );
      }
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (_: any, record: User): JSX.Element => {
        return (
          record.dates[0] && (
            <>
              {record.dates.map(e => {
                return (
                  <div key={nanoid()}>
                    <Typography.Title level={5}>{e.type}</Typography.Title>
                  </div>
                );
              })}
            </>
          )
        );
      }
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (_: any, record: User): JSX.Element => {
        return (
          record.dates[0] && (
            <>
              {record.dates.map(e => {
                return (
                  <div key={nanoid()}>
                    <ChoseStatus
                      fetchData={fetchData}
                      id={e.id}
                      type={e.status}
                    />
                  </div>
                );
              })}
            </>
          )
        );
      }
    }
  ];

  return (
    <Table
      rowKey={record => record.id}
      columns={columns}
      dataSource={searchData}
    />
  );
}
