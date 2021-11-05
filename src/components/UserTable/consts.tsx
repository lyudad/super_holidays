export const data = [
  {
    key: 1,
    block: true,
    name: 'Anna',
    rest: 32,
    position: 'developer',
    description: `My name is Anna, I am  developer an i have 32 rest days.`
  },
  {
    key: 2,
    block: true,
    name: 'User 2',
    rest: 42,
    position: 'developer',
    description: 'My name is user, I am  developer an i have 32 rest days.'
  },
  {
    key: 3,
    block: false,
    name: 'User 3',
    rest: 29,
    position: 'developer',
    description: 'This not expandable'
  },
  {
    key: 4,
    block: true,
    name: 'User 4',
    rest: 32,
    position: 'developer',
    description: 'My name is user, I am  developer an i have 32 rest days.'
  }
];

export const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Edit</a>,
    edit: () => <a>Block</a>
  },
  {
    title: 'Block',
    dataIndex: '',
    onClick: () => alert('!'),
    key: 'x',
    render: () => <a>Block</a>
  }
];
