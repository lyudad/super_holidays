import React from 'react';
import { Props } from './types';

import { StyledSider } from './styles';

export default function ({ menu }: Props): JSX.Element {
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
}
