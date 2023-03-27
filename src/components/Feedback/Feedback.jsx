import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';
import { Notification } from 'components/Notification/Notification';
import css from '../Feedback/Feedback.module.css'

class Feedback extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }

    handleFeedback = (type) => {
        this.setState(prevState => ({
          [type]: prevState[type] + 1
        }));
    }
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total ? ((good / total) * 100).toFixed(2) : 0;
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
            
        return (
        <div className={css.FeedbackMain}>
            <Section title="Please leave feedback">
            <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={this.handleFeedback}
            />
            </Section>

            <Section title="Statistics">
              { this.countTotalFeedback() > 0 ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={totalFeedback}
                    positivePercentage={positiveFeedbackPercentage}
                />
              ) : ( <Notification/>
              )}
            </Section>
        </div>
            
        )
    }


}

export default Feedback;