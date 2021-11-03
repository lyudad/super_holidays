import React from 'react';
import { Props } from './types';

import { StyledSider } from './styles';

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
