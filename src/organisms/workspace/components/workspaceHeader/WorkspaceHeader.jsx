import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSetRecoilState } from 'recoil';

import { IconButton } from 'src/atoms/button';
import { Menu } from '@icons';
import AppBar from 'src/atoms/appBar';
import { appSidebarState } from 'src/constants/stateAtoms';

const WorkspaceHeader = (props) => {
  const { title, className } = props;

  const setIsOpen = useSetRecoilState(appSidebarState);

  const handleMenuClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <AppBar position="fixed" className={className}>
      <div className={cx('flex items-center')}>
        <IconButton onClick={handleMenuClick}>
          <Menu />
        </IconButton>
        <header>
          {title}
        </header>
      </div>
    </AppBar>
  );
};

WorkspaceHeader.propTypes = {
  title: PropTypes.string,
};

WorkspaceHeader.defaultProps = {
  title: 'Tasks',
};

export default WorkspaceHeader;
