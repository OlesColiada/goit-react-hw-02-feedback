import React from 'react';
import styles from './noStatisticDate.module.css';

const NoStatisticDate = ({ notificationMessage }) => {
  return <h3 className={styles.noDatesTitle}>{notificationMessage}</h3>;
};

export default NoStatisticDate;
