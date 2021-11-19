import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import ProfileTable from 'components/ProfileTable';
import Modal from 'components/Modal';
import { Layout, Row, Col } from 'antd';
import { StyledContent, StyledLayout } from './styles';

export default function ProfileView(): JSX.Element {
  const user = useSelector(selectors.getUser);
  return (
    <StyledLayout>
      <Layout>
        <StyledContent>
          <Row style={{ marginBottom: '30px' }}>
            <Col xs={16} sm={14} md={10} lg={8} xl={6} xxl={4}>
              <h1 style={{ fontSize: '25px' }}>{user?.name}</h1>
            </Col>
          </Row>
          <Row style={{ marginBottom: '30px' }}>
            <Col xs={16} sm={14} md={10} lg={8} xl={6} xxl={4}>
              <p style={{ fontSize: '20px' }}>{user?.vacation} sick leave</p>
            </Col>
            <Col xs={16} sm={14} md={10} lg={8} xl={6} xxl={4}>
              <p style={{ fontSize: '20px' }}>{user?.sickDay} vacations days</p>
            </Col>
          </Row>
          <Row justify="end" style={{ marginBottom: '30px' }}>
            <Col sm={8} md={5} lg={4} xl={3}>
              <Modal />
            </Col>
          </Row>
          <ProfileTable />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}
