export const data = [
  {
    key: 1,
    block: true,
    name: 'User 1',
    dates: '21.12.2021 -  25.12.20201',
    type: 'vacation',
    approve: false,
    status: 'Approve'
  },
  {
    key: 2,
    block: true,
    name: 'User 1',
    dates: '21.12.2021 -  25.12.20201',
    type: 'vacation',
    status: 'Approve'
  },
  {
    key: 3,
    block: true,
    name: 'User 1',
    dates: '21.12.2021 -  25.12.20201',
    type: 'vacation',
    status: 'Approve'
  },
  {
    key: 4,
    block: true,
    name: 'User 1',
    dates: '21.12.2021 -  25.12.20201',
    type: 'vacation',
    status: 'Approve'
  }
];

const blockBtn = 'decline | approve | edit';
const unblockBtn = 'unblock';

export const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  { title: 'Dates', dataIndex: 'dates', key: 'data' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (block: boolean): JSX.Element => {
      return <p>{block ? blockBtn : unblockBtn}</p>;
    }
  }
];
