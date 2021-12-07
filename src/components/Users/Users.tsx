import UsersTable from 'components/UsersTable';
import UserForm from 'components/UserForm';

import { StyledContent, StyledLayout } from './styles';
import { useEffect } from 'react';
import { onGetAllUsers } from 'redux/reducers/action-creators';
import { useDispatch } from 'react-redux';

export default function Users(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAllUsers('token'));
  }, [dispatch]);

  return (
    <StyledLayout>
      <StyledContent>
        <UserForm />
        <UsersTable />
      </StyledContent>
    </StyledLayout>
  );
}
