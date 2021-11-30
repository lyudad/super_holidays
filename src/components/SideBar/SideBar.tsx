import Menu from 'components/Menu';

import { StyledSider } from './styles';

export default function SideBar(): JSX.Element {
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
