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
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const {
    questions,
    dispath,
    status,
    answer,
    points,
    index,
    hightScore,
    numQuestions,
    maxPossiblePoints,
    secondRemaining,
  } = useQuiz();
  return (
    <div className="app">
      <Headers />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
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
