import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import ProfileTable from 'components/ProfileTable';
import Modal from 'components/Modal';
import { Row } from 'antd';

import { StyledContent, StyledLayout } from './styles';

export default function ProfileView(): JSX.Element {
  const user = useSelector(selectors.getUser);
  return (
    <StyledLayout>
      <StyledContent>
        <Row style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '25px' }}>
            {user?.first_name}
            {user?.last_name}
          </h1>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <p style={{ fontSize: '20px', marginRight: '50px' }}>
            {user?.sick_leaves} sick leaves
          </p>
          <p style={{ fontSize: '20px' }}>{user?.vacation} vacation days</p>
        </Row>
        <Row justify="end" style={{ marginBottom: '30px' }}>
          <Modal />
        </Row>
        <ProfileTable />
      </StyledContent>
    </StyledLayout>
  );
}
