import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import { FinishedQuiz } from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {}, // { [id]: 'success'  'error'}
    isFinished: true,
    answerState: null, // информация о текущем клике пользователя
    activeQuestion: 0,
    quiz: [
      {
        question: " какой цвет флага Украины? ",
        rightAnswerId: 1,
        id: 1,
        answers: [
          { text: "желто-голубой", id: 1 },
          { text: "бело-синий", id: 2 },
          { text: "красный", id: 3 },
          { text: "зелено-синий", id: 3 },
        ],
      },
      {
        question: " в каком году основали Львов? ",
        rightAnswerId: 1,
        id: 2,
        answers: [
          { text: "1256", id: 1 },
          { text: "1235", id: 2 },
          { text: "1358", id: 3 },
          { text: "1325", id: 3 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" },
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "error" },
      });
    }

    console.log("Answer Id:", answerId);
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer for all questions</h1>

          {this.state.isFinished ? (
            <FinishedQuiz />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
