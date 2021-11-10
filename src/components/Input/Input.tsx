import { Button, Row, Col, Input } from 'antd';
import { eng } from 'helpers/eng';
import { ButtonWrap } from './styles';

export default function AddInput(): JSX.Element {
  const style = { background: '#fff', padding: '0px 0' };
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {' '}
            <Input placeholder="First Name" />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {' '}
            <Input placeholder="Last Name" />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {' '}
            <Input placeholder="e-mail" />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <ButtonWrap>
            <Button block>{eng.button__save}</Button>
          </ButtonWrap>
        </Col>
      </Row>
      <Row justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <ButtonWrap>
            <Button block>{eng.button__sendPass}</Button>
          </ButtonWrap>
          <ButtonWrap>
            <Button type="primary" block>
              {eng.button__addUser}
            </Button>
          </ButtonWrap>
          {/* <ButtonWrap>
            <Button block>+</Button>
          </ButtonWrap> */}
        </Col>
      </Row>
    </>
  );
}
