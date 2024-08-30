import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Progress from "./Progress";

const SECS_PER_QUESTION = 30;

const initialQuestions = {
  questions: [],
  status: "isLoading",
  index: 0,
  answer: null,
  points: 0,
  hightPoint: 0,
  timeOut: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        timeOut: SECS_PER_QUESTION * state.questions.length,
      };
    case "start":
      return { ...state, status: "active" };
    case "dataFailds":
      return { ...state, status: "error" };
    case "newAnswer":
      const questionPoints = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === questionPoints.correctOption
            ? state.points + questionPoints.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finish",
        hightPoint:
          state.points > state.hightPoint
            ? (state.hightPoint = state.points)
            : state.hightPoint,
      };
    case "reset":
      return {
        ...initialQuestions,
        questions: state.questions,
        status: "ready",
        answer: null,
      };
    case "realTime":
      return {
        ...state,
        timeOut: state.timeOut - 1,
        status: state.timeOut === 0 ? "finish" : state.status,
      };
    default:
      throw new Error(`Invalid action `);
  }
};

export default function App() {
  const [
    { questions, status, index, answer, points, hightPoint, timeOut },
    dispatch,
  ] = useReducer(reducer, initialQuestions);
  const questionLength = questions.length;
  useEffect(() => {
    fetch("http://localhost:9001/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ payload: data, type: "dataReceived" }))
      .catch(() => dispatch({ type: "dataFailds" }));
  }, []);
  const totalPoints = questions.reduce(
    (cur, questions) => cur + questions.points,
    0
  );
  console.log(totalPoints);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "isLoading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            questionLength={questionLength}
            dispatch={dispatch}
            questions={questions}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              totalPoints={totalPoints}
              points={points}
              questionLength={questionLength}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              answer={answer}
              index={index}
              dispatch={dispatch}
            />
            <Timer dispatch={dispatch} timeOut={timeOut} />
            <NextButton
              dispatch={dispatch}
              index={index}
              questionLength={questionLength}
              answer={answer}
            />
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            questionLength={questionLength}
            dispatch={dispatch}
            points={points}
            hightPoint={hightPoint}
            totalPoints={totalPoints}
          />
        )}
      </Main>
    </div>
  );
}
