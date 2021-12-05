import { useState } from 'react';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { FIRST_PAGE, PAGE_SIZE } from './const';
import { nanoid } from 'nanoid';

import { Table } from 'antd';

export default function ProfileTable(): JSX.Element {
  const { dates } = useSelector(selectors.getState);

  const dataExample = dates?.map(e => {
    return {
      key: nanoid(),
      dates: `${e.start_day} - ${e.end_day}`,
      status: e.status,
      type: e.type
    };
  });
  const [page] = useState<number>(FIRST_PAGE);
  const [pageSize] = useState<number>(PAGE_SIZE);

  const columns = [
    {
      key: '1',
      title: 'Dates',
      dataIndex: 'dates'
    },
    {
      key: '3',
      title: 'status',
      dataIndex: 'approved',
      render: (approved: boolean) => {
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
        columns={columns}
        dataSource={dataExample}
        pagination={{
          current: page,
          pageSize: pageSize
        }}
      ></Table>
    </div>
  );
}
