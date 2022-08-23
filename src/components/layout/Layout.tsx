import React from 'react';
import Sidebar from '../sidebar/Sidebar';

import styles from './Layout.module.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
