function NextButton({ dispath, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispath({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispath({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
