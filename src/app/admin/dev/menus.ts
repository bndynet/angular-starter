import { MenuEntity } from 'src/app/app-types';

export const menus: MenuEntity[] = [
  {
    icon: 'code',
    text: 'DEVELOP',
    children: [
      {
        icon: 'star',
        text: 'Get Started',
        link: '/admin/dev/get-started',
      },
      {
        icon: 'code',
        text: 'Examples',
        children: [
          {
            text: 'Button',
            link: '/admin/dev/examples/button',
          },
          {
            text: 'Card',
            link: '/admin/dev/examples/card',
          },
          {
            text: 'Table',
            link: '/admin/dev/examples/table',
          },
        ],
      },
    ],
  },
];
