import { useState } from 'react';
import { User } from 'redux/reducers/types';
import AdminTable from 'components/AdminTable';
import { Layout, Row, Col } from 'antd';

import { StyledContent, StyledLayout } from './styles';

export default function Dashboard(): JSX.Element {
  const [searchData, setSearchData] = useState<User[]>([]);
  return (
    <StyledLayout>
      <Layout>
        <StyledContent>
          <Row justify="end" style={{ marginBottom: '30px' }}>
            <Col sm={8} md={5} lg={4} xl={3}></Col>
          </Row>
          <AdminTable searchData={searchData} setSearchData={setSearchData} />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}
