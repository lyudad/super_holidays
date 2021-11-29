import { useState, ChangeEvent, useEffect } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { onLogin } from 'redux/reducers/action-creators';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'helpers/utils';
import selectors from '../../redux/selectors';
import { onCurrentUser } from 'redux/reducers/action-creators';

// interface AuthObject {
//   accessToken: string;
//   refreshToken: string;
//   sid: string;
// }

export default function (): JSX.Element {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, sePass] = useState<string>('');
  const state = useAppSelector(selectors.getState);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const onChangePass = (e: ChangeEvent<HTMLInputElement>): void => {
    sePass(e.target.value);
  };

  const onFinish = (): void => {
    dispatch(onLogin({ email, password }));
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };
  useEffect(() => {
    if (state.auth?.accessToken) {
      dispatch(onCurrentUser());
    }
  }, [dispatch, state.auth]);

  return (
    <Row align="middle" justify="center" style={{ minHeight: '100vh' }}>
      <Col xs={16} sm={14} md={10} lg={8} xl={6} xxl={4}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ textAlign: 'center' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              value={email}
              onChange={onChangeName}
              placeholder="username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              value={password}
              onChange={onChangePass}
              placeholder="password"
            />
          </Form.Item>

          <Form.Item>
            <Button onClick={onFinish} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
