import React, { Component } from 'react';
import Statistic from './feedback/statistic/statistic';
import FeedbackOptions from './feedback/feedbackOptions/feedbackOptions';
import NoStatisticDate from './feedback/noStatisticDate/noStatisticDate';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
      notificationMessage: 'There is no feedback',
    };
  }
  

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
    this.countTotalFeedback();
    setTimeout(() => {
      this.countPositiveFeedbackPercentage();
    }, 1);
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { total, good } = this.state;
    const positiveFeedback =
      total === 0 ? 0 : ((good * 100) / total).toFixed(0);
    this.setState({
      positiveFeedback: positiveFeedback,
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback, notificationMessage } =
      this.state;
    let contentOfPage;

    total === 0
      ? (contentOfPage = (
          <NoStatisticDate notificationMessage={notificationMessage} />
        ))
      : (contentOfPage = (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        ));

    return (
      <div className={styles.mainDiv}>
        <h2>Please leave feedback</h2>
        <FeedbackOptions handleFeedback={this.handleFeedback} />
        {contentOfPage}
      </div>
    );
  }
}

export default App;
