// import UserTable from 'components/UserTable';
import UserForm from 'components/UserForm';
import TableAdmin from 'components/TableAdmin';

import { StyledContent, StyledLayout } from './styles';

export default function Users(): JSX.Element {
  return (
    <StyledLayout>
      <StyledContent>
        <UserForm />
        <TableAdmin />
      </StyledContent>
    </StyledLayout>
  );
}
