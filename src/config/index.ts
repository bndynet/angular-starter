import { ThemeEntity } from 'src/app/app-types';

export * from './converters';

// TODO: define your protected page
export const protectedUrlPrefixes = []; // ['/admin'];

// The keys MUST be defined in ../styles/_theme.scss file
export const themes: ThemeEntity[] = [
  {
    key: 'dark',
    name: 'Dark Theme',
    isDark: true,
  },
  {
    key: 'popular',
    name: 'Popular Theme',
  },
];

export const roles = {
  role_admin: 'Administrator',
  role_doc: 'Document Owner',
};
