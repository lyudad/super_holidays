/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Row, Button } from 'antd';
import { axiosApiInstance } from 'api/axios';
import { StyledContent, StyledLayout } from 'pages/ProfileView/styles';
import { TypeUserDates, User } from 'redux/reducers/types';
import ProfileTable from 'components/ProfileTable';
import Calendar from 'components/Calendar';

interface Props {
  user: User | null;
  setEdit: Dispatch<SetStateAction<boolean>>;
}
const date = new Date();

export default function EditView({ user, setEdit }: Props): JSX.Element {
  const [dates, setDates] = useState<TypeUserDates[]>([]);
  const onSendPass = async () => {
    try {
      await axiosApiInstance.post('mail', {
        name: `${user?.first_name}  ${user?.last_name}`,
        email: user?.email
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (user?.dates) {
      setDates(user?.dates);
    }
  }, []);
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
            {user?.total_sick_leaves} sick leaves
          </p>
          <p style={{ fontSize: '20px' }}>
            {user?.total_vacations} vacation days
          </p>
        </Row>
        <Row>
          <Button onClick={() => setEdit(false)}>Go Back</Button>
          <Button onClick={onSendPass}>Send Password</Button>
        </Row>
        <Row justify="end" style={{ marginBottom: '30px' }}>
          <Calendar dayToDay={date} setDates={setDates} id={user?.id} />
        </Row>
        <ProfileTable dates={dates} />
      </StyledContent>
    </StyledLayout>
  );
}
