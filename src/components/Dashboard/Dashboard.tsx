import { Layout, Row, Col } from 'antd';
import AdminTable from 'components/AdminTable';
import { StyledContent, StyledLayout } from './styles';

export default function Dashboard(): JSX.Element {
  return (
    <StyledLayout>
      <Layout>
        <StyledContent>
          <Row justify="end" style={{ marginBottom: '30px' }}>
            <Col sm={8} md={5} lg={4} xl={3}></Col>
          </Row>
          <AdminTable />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}
