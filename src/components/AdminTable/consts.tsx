import ButtonGroup from './ButtonGroup';

export const columns = [
  { title: 'User', dataIndex: 'name', key: 'name' },
  { title: 'Dates', dataIndex: 'dates', key: 'data' },
  { title: 'Type', dataIndex: 'type', key: 'key' },
  {
    title: 'Action',
    dataIndex: 'key',
    key: 'x',
    render: (key: number): JSX.Element => {
      return (
        <>
          <ButtonGroup onId={key} />
        </>
      );
    }
  }
];
