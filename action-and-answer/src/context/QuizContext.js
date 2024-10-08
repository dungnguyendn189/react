import { createContext, useContext, useEffect, useReducer } from "react";

const QuizProvider = createContext();

const SECS_PER_QUESTION = 30;

function QuizContext({ children }) {
  const inittialStates = {
    questions: [],
    status: "loading",
    index: 0,
    answer: "null",
    points: 0,
    hightScore: 0,
    secondRemaining: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: "ready" };
      case "dataField":
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
        return {
          ...inittialStates,
          questions: state.questions,
          status: "ready",
        };
      case "tick":
        return {
          ...state,
          secondRemaining: state.secondRemaining - 1,
          status: state.secondRemaining === 0 ? "finished" : state.status,
        };
      default:
        throw new Error("loading data failled");
    }
  }

  const [
    { status, index, answer, points, hightScore, secondRemaining, questions },
    dispath,
  ] = useReducer(reducer, inittialStates);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispath({ type: "dataReceived", payload: data });
      })
      .catch((err) => dispath({ type: "dataFaild" }));
  }, []);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispath({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispath]
  );

  return (
    <QuizProvider.Provider
      value={{
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
        mins,
        seconds,
      }}
    >
      {children}
    </QuizProvider.Provider>
  );
}

const useQuiz = () => {
  const context = useContext(QuizProvider);
  if (context === undefined) {
    throw new Error("useQuiz must be used outside QuizProvider");
  }
  return context;
};

export { QuizContext, useQuiz };
