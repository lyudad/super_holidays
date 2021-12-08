import UsersTable from 'components/UsersTable';
import UserForm from 'components/UserForm';

import { StyledContent, StyledLayout } from './styles';

export default function Users(): JSX.Element {
  return (
    <StyledLayout>
      <StyledContent>
        <UserForm />
        <UsersTable />
      </StyledContent>
    </StyledLayout>
  );
}
