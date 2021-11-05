import { Table } from 'antd';
import { data } from './consts';
import { columns } from './consts';

export default function UserPageTable(): JSX.Element {
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable'
        }}
        dataSource={data}
      />
      ,
    </>
  );
}
