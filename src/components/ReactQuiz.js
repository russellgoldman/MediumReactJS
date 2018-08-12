// to demonstrate the use of State
import React, { Component } from 'react';

class ReactQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,   // let us denote -1 as no choice selected
      currentQuestion: 0,
      submitted: false,
      // let us denote -1 as no submission has occurred yet, 0 is false, and 1 is true
      answerCorrect: -1,
      lastQuestion: Object.keys(this.props.quizData).length - 1,
      score: 0,
    };
  }

  renderChoices() {
    if (this.state.submitted) {
      return this.props.quizData[this.state.currentQuestion].choices.map((choice, index) => {
        if (choice !== this.props.quizData[this.state.currentQuestion].answer) {
          return (
            <div onClick={() => this.setState({ selected: index })} key={index}>
              <p style={{ color: 'red' }}><b>Option {index + 1}:</b> {choice}</p>
            </div>
          );
        }

        // else
        return (
          <div onClick={() => this.setState({ selected: index })} key={index}>
            <p style={{ color: 'green' }}><b>Option {index + 1}:</b> {choice}</p>
          </div>
        );
      });
    }

    // else
    return this.props.quizData[this.state.currentQuestion].choices.map((choice, index) => {
      return (
        <div onClick={() => this.setState({ selected: index })}>
          <p><b>Option {index + 1}:</b> {choice}</p>
        </div>
      );
    });
  };

  renderSelected() {
    if (this.state.selected !== -1 && !this.state.submitted) {
      return (
        <h4>{`Currently selected: ${this.props.quizData[this.state.currentQuestion].choices[this.state.selected]}`}</h4>
      );
    } else {
      return (null);
    }
  }

  incrementScore() {
    // NEVER CALL SET STATE IN RENDER METHODS, only in events
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  }

  renderNextButton() {
    if (this.state.lastQuestion === this.state.currentQuestion) {
      return (<button onClick={() => this.onFinalResults()}>Final Results</button>);
    } else {
      return (<button onClick={() => this.onNextQuestion()}>Next Question</button>);
    }
  }

  renderSubmit() {
    if (this.state.submitted) {
      if (this.state.answerCorrect === 0) {
        return (
          <div>
            <h4>{`Sadly, ${this.props.quizData[this.state.currentQuestion].choices[this.state.selected]}
              is incorrect.`}</h4>
            {this.renderNextButton()}
          </div>
        );
      } else {
        return (
          <div>
            <h4>{`Good work!`}</h4>
            {this.renderNextButton()}
          </div>
        );
      }
    } else {
      return (<button onClick={() => this.onSubmit()}>Submit!</button>);
    }
  }

  onSubmit() {
    if (this.state.submitted === false && this.state.selected != -1) {
      this.setState({ submitted: true });
      if (this.props.quizData[this.state.currentQuestion].choices[this.state.selected] === this.props.quizData[this.state.currentQuestion].answer) {
        this.setState({ answerCorrect: 1 });
      } else {
        this.setState({ answerCorrect: 0 });
      }
    }
  }

  onNextQuestion() {
    if (this.state.lastQuestion > this.state.currentQuestion) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));

      if (this.state.answerCorrect === 1) {
        this.incrementScore();
      }

      // reset some state for next question
      this.setState({
        submitted: false,
        selected: -1,
      });
    }
  }

  onFinalResults() {
    if (this.state.answerCorrect === 1) {
      this.incrementScore();
    }

    // timeout to wait for React to receive asynchronous state updates
    setTimeout(() => {
      alert(`Your total score was ${this.state.score} / ${this.state.lastQuestion + 1}!`);
      window.location.reload();
    }, 300);
  }

  render() {
    const { quizData } = this.props;

    return (
      <div>
        <p>Click on the correct choice and submit!</p>
        <h3>{`Question ${this.state.currentQuestion + 1}: ${quizData[this.state.currentQuestion].question}`}</h3>
        {this.renderChoices()}
        {this.renderSelected()}
        {this.renderSubmit()}
      </div>
    );
  }
}

export default ReactQuiz;
