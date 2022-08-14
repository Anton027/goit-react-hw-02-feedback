
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
// import { Box } from './Box';

// const Notification = ({ message }) => {
//   return <Box>{message}</Box>
// }


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
    }))
  };

  onAddGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onAddNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  }

  onAddBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (
      good +
      neutral +
      bad
    )
  }
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
    
  }

  render() {
    return (
      <>
        {/* <Section title="Please leave feedback" children={<FeedbackOptions />} />
        <Section title='Statistic' children={<Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />} /> */}
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state}
            onLeaveFeedbackGood={this.onAddGood}
            onLeaveFeedbackNeutral={this.onAddNeutral}
            onLeaveFeedbackBad={this.onAddBad}
          />
        </Section>
        <Section title='Statistic'>
            {}
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> 
          
        </Section>
        
        <GlobalStyle />
      </>
    );
  }
  
};
