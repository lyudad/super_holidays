import { useState } from 'react';
import { TypeUserDates } from 'redux/reducers/types';
import { FIRST_PAGE, PAGE_SIZE } from './const';
import { Table } from 'antd';

interface Props {
  dates: TypeUserDates[] | undefined;
}

export default function ProfileTable(props: Props): JSX.Element {
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
        dataSource={props?.dates?.reverse()}
        pagination={{
          current: page,
          pageSize: pageSize
        }}
      ></Table>
    </div>
  );
}
