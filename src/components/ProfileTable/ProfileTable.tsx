import { useState } from 'react';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { FIRST_PAGE, PAGE_SIZE } from './const';
import { nanoid } from 'nanoid';

import { Table } from 'antd';

export default function ProfileTable(): JSX.Element {
  const { dates } = useSelector(selectors.getState);

  const months = [
    { '01': 'January' },
    { '02': 'February' },
    { '03': 'March' },
    { '04': 'April' },
    { '05': 'May' },
    { '06': 'June' },
    { '07': 'July' },
    { '08': 'August' },
    { '09': 'September' },
    { '10': 'October' },
    { '11': 'November' },
    { '12': 'December' }
  ];

  const dataExample = dates?.map(e => {
    const startDay = e.start_day.split('')[8] + e.start_day.split('')[9];
    const endDay = e.end_day.split('')[8] + e.end_day.split('')[9];
    const month = months.filter(
      object =>
        Object.keys(object).join() ===
        e.start_day.split('')[5] + e.start_day.split('')[6]
    );
    return {
      key: nanoid(),
      month: Object.values(month[0]).join(),
      dates: `${startDay}-${endDay}`,
      status: e.status,
      type: e.type
    };
  });
  const [page] = useState<number>(FIRST_PAGE);
  const [pageSize] = useState<number>(PAGE_SIZE);

  const columns = [
    {
      key: '1',
      title: 'month',
      dataIndex: 'month'
    },
    {
      key: '2',
      title: 'dates',
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
