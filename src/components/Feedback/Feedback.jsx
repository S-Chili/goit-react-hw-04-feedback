import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';
import { Notification } from 'components/Notification/Notification';
import css from '../Feedback/Feedback.module.css'

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleGoodClick = () => {
    setGood(prevState => prevState + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleBadClick = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? "0" : (Math.round((good / total) * 100)).toString();
  }

  return (
    <div className={css.FeedbackMain}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={(option) => {
            switch (option) {
              case 'good':
                return handleGoodClick();
              case 'neutral':
                return handleNeutralClick();
              case 'bad':
                return handleBadClick();
              default:
                return;
            }
          }}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (<Notification />
        )}
      </Section>
    </div>
            
  )
}

// class OldFeedback extends Component {
//     state = {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     }

//     handleFeedback = (type) => {
//         this.setState(prevState => ({
//           [type]: prevState[type] + 1
//         }));
//     }
    
//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     }
    
//     countPositiveFeedbackPercentage = () => {
//         const { good } = this.state;
//         const total = this.countTotalFeedback();
//         return total ? ((good / total) * 100).toFixed(2) : 0;
//     }
    
//     render() {
//         const { good, neutral, bad } = this.state;
//         const totalFeedback = this.countTotalFeedback();
//         const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
            
//         return (
//         <div className={css.FeedbackMain}>
//             <Section title="Please leave feedback">
//             <FeedbackOptions
//                 options={['good', 'neutral', 'bad']}
//                 onLeaveFeedback={this.handleFeedback}
//             />
//             </Section>

//             <Section title="Statistics">
//               { this.countTotalFeedback() > 0 ? (
//                 <Statistics
//                     good={good}
//                     neutral={neutral}
//                     bad={bad}
//                     total={totalFeedback}
//                     positivePercentage={positiveFeedbackPercentage}
//                 />
//               ) : ( <Notification/>
//               )}
//             </Section>
//         </div>
            
//         )
//     }


// }

