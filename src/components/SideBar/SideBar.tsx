import React from 'react';

import { StyledSider } from './styles';

interface Props {
  menu: JSX.Element;
}

const SideBar = ({ menu }: Props) => {
  return (
    <StyledSider
      breakpoint={'lg'}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </StyledSider>
  );
};

export default SideBar;
