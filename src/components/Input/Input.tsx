import { Button, Col, Row, Input } from 'antd';
import { eng } from 'helpers/eng';
import { ButtonWrap, InputCol, ButtonRow } from './styles';

export default function AddInput(): JSX.Element {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <InputCol span={6}>
          <Input placeholder="First Name" />
        </InputCol>
        <InputCol span={6}>
          <Input placeholder="Last Name" />
        </InputCol>
        <InputCol span={6}>
          <Input placeholder="e-mail" />
        </InputCol>
        <InputCol span={6}>
          {/* <ButtonWrap>
            <Button block>{eng.button__save}</Button>
          </ButtonWrap> */}
          <ButtonWrap>
            <Button block>{eng.button__sendPass}</Button>
          </ButtonWrap>
        </InputCol>
      </Row>
      <ButtonRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <ButtonWrap>
            <Button type="primary" block>
              {eng.button__addUser}
            </Button>
          </ButtonWrap>
          {/* <ButtonWrap>
            <Button block>+</Button>
          </ButtonWrap> */}
        </Col>
      </ButtonRow>
    </>
  );
}
