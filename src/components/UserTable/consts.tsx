import { OnName, OnEmail, OnStatus, OnEdit } from './UserColumns';

export const columns = [
  {
    title: 'User',
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => {
      return <OnName name={name} />;
    }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (email: string) => {
      return <OnEmail email={email} />;
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      return <OnStatus status={status} />;
    }
  },
  {
    title: 'Action',
    dataIndex: 'key',
    key: 'x',
    render: (key: number): JSX.Element => {
      return <OnEdit uid={key} />;
    }
  }
];
