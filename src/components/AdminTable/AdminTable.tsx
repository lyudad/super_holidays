import { Table } from 'antd';
import { data } from './consts';
import { columns } from './consts';

export default function AdminTable(): JSX.Element {
  return <Table columns={columns} dataSource={data} />;
}
