import UserTable from 'components/UserTable';
import AddInput from 'components/Input';

import { StyledContent, StyledLayout } from './styles';

export default function Users(): JSX.Element {
  return (
    <StyledLayout>
      <StyledContent>
        <AddInput />
        <UserTable />
      </StyledContent>
    </StyledLayout>
  );
}
