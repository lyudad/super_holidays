import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TypeUserDates } from 'redux/reducers/types';
import selectors from 'redux/selectors';
import { FIRST_PAGE, PAGE_SIZE } from './const';
import { Table } from 'antd';

export default function ProfileTable(): JSX.Element {
  const { dates } = useSelector(selectors.getState);
  const [page] = useState<number>(FIRST_PAGE);
  const [pageSize] = useState<number>(PAGE_SIZE);

  const columns = [
    {
      key: '1',
      title: 'Dates',
      dataIndex: 'dates',
      render: (_: any, e: TypeUserDates): JSX.Element => {
        return (
          <p>
            {e.start_day} - {e.end_day}{' '}
          </p>
        );
      }
    },
    {
      key: '3',
      title: 'status',
      dataIndex: 'approved',
      render: (approved: boolean): JSX.Element => {
        return <p>{approved ? 'approve' : 'pending'}</p>;
      }
    },
    {
      key: '4',
      title: 'type',
      dataIndex: 'type'
    }
  ];

  return (
    <div className="table">
      <Table
        rowKey={record => record.id}
        columns={columns}
        dataSource={dates}
        pagination={{
          current: page,
          pageSize: pageSize
        }}
      ></Table>
    </div>
  );
}
