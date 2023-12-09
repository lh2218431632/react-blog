import { ReactNode } from 'react';

export interface route {
  path: string;
  element(): React.FC;
  children: route[];
}

// export interface MenuItemType {
//   danger?: boolean;
//   disabled?: boolean;
//   icon?: ReactNode;
//   key: string;
//   label: ReactNode;
//   title: string;
// }
