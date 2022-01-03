import ProfileTable from 'components/ProfileTable';
import Modal from 'components/Modal';
import { Row } from 'antd';
import { StyledContent, StyledLayout } from 'pages/ProfileView/styles';
import { User } from 'redux/reducers/types';

interface Props {
  user: User | null;
}

export default function EditView({ user }: Props): JSX.Element {
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
