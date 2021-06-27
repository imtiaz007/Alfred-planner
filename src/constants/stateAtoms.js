import { atom } from 'recoil';

const appSidebarState = atom({
  key: '_APP_SIDEBAR_STATE',
  default: false,
});

export {
  appSidebarState,
};
