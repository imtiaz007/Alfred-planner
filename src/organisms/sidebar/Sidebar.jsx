import React from 'react';
import Drawer from 'src/atoms/drawer';
import { useRecoilState } from 'recoil';
import { appSidebarState } from 'src/constants/stateAtoms';

const Sidebar = ({ className, classes }) => {
  const [isOpen] = useRecoilState(appSidebarState);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      className={className}
      classes={classes}
    >
      <div style={{}} />
    </Drawer>
  );
};
export default Sidebar;
