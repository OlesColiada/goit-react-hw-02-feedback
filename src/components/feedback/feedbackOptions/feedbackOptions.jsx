import React from 'react';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div className={styles.buttonDiv}>
      <button
        className={styles.btn}
        onClick={() => {
          handleFeedback('good');
        }}
      >
        Good
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          handleFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          handleFeedback('bad');
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
