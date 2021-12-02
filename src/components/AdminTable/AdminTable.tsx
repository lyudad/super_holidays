import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'redux/selectors';
import { onGetAllUsers } from 'redux/reducers/action-creators';
import { Table } from 'antd';
import { columns } from './consts';
import ChoseType from './choseType';

export default function AdminTable(): JSX.Element {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getAllUsers);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(onGetAllUsers('token'));
    }
  }, [dispatch, users.length]);
  console.log(users);
  const newData = users.map(e => {
    return {
      key: e.id,
      block: e.isBlocked,
      name: `${e.first_name} ${e.last_name}`,
      dates: e.dates[0]
        ? `${e.dates[0].start_day} -- ${e.dates[0].end_day}`
        : 'none',
      type: <ChoseType />,
      approve: true
    };
  });
  console.log(newData);

  return <Table columns={columns} dataSource={newData} />;
}
