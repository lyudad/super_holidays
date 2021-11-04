import { MenuClickEventHandler } from 'rc-menu/lib/interface';

export interface Props {
  selectedKey: string;
  changeSelectedKey: MenuClickEventHandler;
}
