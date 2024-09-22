import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { mins, seconds } = useQuiz();

  return (
    <div className="timer">
      {mins < 10 && 0}
      {mins} : {seconds < 10 && 0}
      {seconds}
    </div>
  );
}

export default Timer;
