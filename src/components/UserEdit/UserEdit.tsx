import { Row, Button } from 'antd';
import { axiosApiInstance } from 'api/axios';
import { StyledContent, StyledLayout } from 'pages/ProfileView/styles';
import { User } from 'redux/reducers/types';
import ProfileTable from 'components/ProfileTable';
import Calendar from 'components/Calendar';

interface Props {
  user: User | null;
}
const date = new Date();

export default function EditView({ user }: Props): JSX.Element {
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
          <Button onClick={onSendPass}>Send Password</Button>
        </Row>
        <Row justify="end" style={{ marginBottom: '30px' }}>
          <Calendar dayToDay={date} />
        </Row>
        <ProfileTable dates={user?.dates} />
      </StyledContent>
    </StyledLayout>
  );
}
