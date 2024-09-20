import { useEffect, useReducer } from "react";
import Headers from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SECS_PER_QUESTION = 30;

const initialStates = {
  questions: [],

  //"loading","error",'ready','active','fished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  hightScore: 0,
  secondRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        hightScore:
          state.points > state.hightScore ? state.points : state.hightScore,
      };
    case "restart":
      return { ...initialStates, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [
    { questions, status, index, answer, points, hightScore, secondRemaining },
    dispath,
  ] = useReducer(reducer, initialStates);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispath({ type: "dataReceived", payload: data }))
      .catch((err) => dispath({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Headers />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispath={dispath} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispath={dispath}
              answer={answer}
            />
            <Footer>
              <Timer dispath={dispath} secondRemaining={secondRemaining} />
              <NextButton
                dispath={dispath}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            hightScore={hightScore}
            dispath={dispath}
          />
        )}
      </Main>
    </div>
  );
}
