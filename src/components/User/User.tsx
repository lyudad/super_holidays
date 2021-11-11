import UserTable from 'components/UserTable';
import AddInput from 'components/Input';

import { Layout } from 'antd';
import { StyledContent, StyledLayout } from './styles';

export default function User(): JSX.Element {
  return (
    <StyledLayout>
      <Layout>
        <StyledContent>
          <AddInput />
          <UserTable />
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
}
