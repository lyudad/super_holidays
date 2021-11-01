import { useState } from 'react';

import { Table } from 'antd';

const dataE = [
  {
    key: '1',
    month: 'July 2021',
    dates: '10-20',
    status: 'Pending',
    type: 'vacation'
  },
  {
    key: '2',
    month: 'April 2021',
    dates: '8',
    status: 'Pending',
    type: 'vacation'
  },
  {
    key: '3',
    month: 'May 2021',
    dates: '12-13',
    status: 'Pending',
    type: 'sick leave'
  },
  {
    key: '4',
    month: 'September 2021',
    dates: '11-18',
    status: 'Pending',
    type: 'vacation'
  },
  {
    key: '5',
    month: 'Fabruary 2021',
    dates: '5',
    status: 'Pending',
    type: 'sick leave'
  },
  {
    key: '6',
    month: 'March 2021',
    dates: '15-16',
    status: 'Pending',
    type: 'sick leave'
  }
];

const ProfileTable = () => {
  const [data, setData] = useState(dataE);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

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
      //   filters: [
      //     { text: 'vacation', value: false },
      //     { text: 'sick leave', value: true }
      //   ],
      //   onFilter: (value: any, record: any) => {
      //     return record.approved === value;
      //   }
    }
  ];
  return (
    <div className="table">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: page,
          pageSize: pageSize
          //   total: 5,
          //   onChange: (p, pSize) => {
          //     setPage(p);
          //     setPageSize(pSize);
          //   }
        }}
      ></Table>
    </div>
  );
};

export default ProfileTable;
