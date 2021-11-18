import { Table } from 'antd';
import { data } from './consts';
import { columns } from './consts';

export default function UserTable(): JSX.Element {
  return (
    <>
      <div>123</div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
