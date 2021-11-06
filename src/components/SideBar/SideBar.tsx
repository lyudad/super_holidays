import Menu from '../Menu';
import { StyledSider } from './styles';

export default function (): JSX.Element {
  return (
    <StyledSider
      breakpoint={'lg'}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      <Menu />
    </StyledSider>
  );
}
