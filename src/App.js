import React, { Component } from 'react';
import { ReactQuiz } from './containers';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      quizData: {
        0: {
          question: 'What language do React developers use to write their code?',
          choices: [
            'Java',
            'Python',
            'JavaScript',
            'React',
            'Swift',
          ],
          answer: 'JavaScript',
        },
        1: {
          question: 'What is it called when we manage internal data in a Component?',
          choices: [
            'Props',
            'State',
          ],
          answer: 'State',
        },
        2: {
          question: 'Which of the following will cause our app to CRASH if we call setState() within it?',
          choices: [
            'Render Methods',
            'Event Methods',
          ],
          answer: 'Render Methods',
        },
      },
    };
  }

  render() {
    return (
      <ReactQuiz quizData={this.state.quizData} />
    );
  }
}

export default Main;
