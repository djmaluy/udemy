import React from "react";
import classes from "./FinishedQuiz.module.css";

export const FinishedQuiz = () => {
  return (
    <div className={classes.FinishedQuiz}>
      finished
      <ul>
        <li>
          <strong>1. </strong>
          Неправильно
          <i className={"fa fa-times " + classes.error} />
        </li>
        <li>
          <strong>2. </strong>
          Правильно
          <i className={"fa fa-check " + classes.success} />
        </li>
      </ul>
      <p>правильно 5 из 10</p>
      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};
