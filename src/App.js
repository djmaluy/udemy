import React from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Switch } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
        <Route
          render={() => (
            <h1
              style={{ fontSize: "80", marginTop: "120", textAlign: "center" }}
            >
              Page not found
            </h1>
          )}
        />
      </Switch>
    </Layout>
  );
}

export default App;
