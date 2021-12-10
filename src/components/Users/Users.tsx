import { useState } from 'react';
import UsersTable from 'components/UsersTable';
import UserForm from 'components/UserForm';
import { User } from 'redux/reducers/types';

import { StyledContent, StyledLayout } from './styles';

export default function Users(): JSX.Element {
  const [searchData, setSearchData] = useState<User[]>([]);

  return (
    <StyledLayout>
      <StyledContent>
        <UserForm setSearchData={setSearchData} />
        <UsersTable searchData={searchData} setSearchData={setSearchData} />
      </StyledContent>
    </StyledLayout>
  );
}
