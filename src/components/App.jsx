
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = (label) => {
    this.setState({
      good: label + 1
    })
  }
  countTotalFeedback = () => {
    return (
      this.state.good +
      this.state.neutral +
      this.state.bad
    )
  }
  countPositiveFeedbackPercentage = () => {
    return (
      100
    )
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
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title='Statistic'>
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
