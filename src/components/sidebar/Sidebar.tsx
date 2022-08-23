import React from 'react';
import styles from './Sidebar.module.scss';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import DocumentScannerRoundedIcon from '@mui/icons-material/DocumentScannerRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Admin Panel</div>
      <ul className={styles.list}>
        <h6 className={styles.list__title}>Main</h6>
        <li>
          <span className={styles.list__icon}>
            <DashboardRoundedIcon />
          </span>
          Dashboard
        </li>
        <h6 className={styles.list__title}>Lists</h6>
        <li>
          <span className={styles.list__icon}>
            <PeopleRoundedIcon />
          </span>
          Users
        </li>
        <li>
          <span className={styles.list__icon}>
            <CategoryRoundedIcon />
          </span>
          Products
        </li>
        <li>
          <span className={styles.list__icon}>
            <ReorderRoundedIcon />
          </span>
          Orders
        </li>
        <li>
          <span className={styles.list__icon}>
            <LocalShippingRoundedIcon />
          </span>
          Delivery
        </li>
        <h6 className={styles.list__title}>Useful</h6>
        <li>
          <span className={styles.list__icon}>
            <QueryStatsRoundedIcon />
          </span>
          Stats
        </li>
        <li>
          <span className={styles.list__icon}>
            <NotificationsRoundedIcon />
          </span>
          Notifications
        </li>
        <h6 className={styles.list__title}>Service</h6>
        <li>
          <span className={styles.list__icon}>
            <MedicalServicesRoundedIcon />
          </span>
          System Health
        </li>
        <li>
          <span className={styles.list__icon}>
            <DocumentScannerRoundedIcon />
          </span>
          Logs
        </li>
        <li>
          <span className={styles.list__icon}>
            <SettingsRoundedIcon />
          </span>
          Settings
        </li>
        <h6 className={styles.list__title}>User</h6>
        <li>
          <span className={styles.list__icon}>
            <AccountCircleRoundedIcon />
          </span>
          Profile
        </li>
        <li>
          <span className={styles.list__icon}>
            <LogoutRoundedIcon />
          </span>
          Logout
        </li>
        <li className={styles.buttons}>
          <button className={styles.btn__white}></button>
          <button className={styles.btn__black}></button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
