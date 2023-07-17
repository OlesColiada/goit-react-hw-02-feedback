import React from 'react';
import styles from './statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={styles.statDiv}>
      <h3>Statistics</h3>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total: {total}</p>
      <p>Fositive feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Statistic;
