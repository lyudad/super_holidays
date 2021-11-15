export const data = [
  {
    key: 1,
    block: true,
    name: 'User 1',
    edit: 'edit',
    approve: false,
    status: 'Approve'
  },
  {
    key: 2,
    block: true,
    name: 'User 1',
    edit: 'edit',
    status: 'Approve'
  },
  {
    key: 3,
    block: true,
    name: 'User 1',
    edit: 'edit',
    status: 'Approve'
  },
  {
    key: 4,
    block: true,
    name: 'User 1',
    edit: 'edit',
    status: 'Approve'
  }
];

const blockBtn = 'block';
const unblockBtn = 'unblock';

export const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  { title: 'Edit', dataIndex: 'edit', key: 'edit' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (block: boolean): JSX.Element => {
      return <p>{block ? blockBtn : unblockBtn}</p>;
    }
  }
];
