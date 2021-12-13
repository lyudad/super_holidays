import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'redux/selectors';
import { onCurrentBooking } from 'redux/reducers/action-creators';
import ProfileTable from 'components/ProfileTable';
import Calendar from 'components/Calendar';
import { Row } from 'antd';

const date: Date = new Date();

import { StyledContent, StyledLayout } from './styles';

export default function ProfileView(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector(selectors.getUser);
  useEffect(() => {
    if (user && user.id) {
      dispatch(onCurrentBooking(user.id));
    }
  }, [dispatch, user]);
  return (
    <StyledLayout>
      <StyledContent>
        <Row style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '25px' }}>
            {user?.first_name} {user?.last_name}
          </h1>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <p style={{ fontSize: '20px', marginRight: '50px' }}>
            {user?.sick_leaves} sick leaves
          </p>
          <p style={{ fontSize: '20px' }}>{user?.vacation} vacation days</p>
        </Row>
        <Row justify="end" style={{ marginBottom: '30px' }}>
          <Calendar dayToDay={date} />
        </Row>
        <ProfileTable />
      </StyledContent>
    </StyledLayout>
  );
}
