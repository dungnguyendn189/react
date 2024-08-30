function NextButton({ dispatch, questionLength, index, answer }) {
  console.log(index);
  console.log(questionLength);
  if (index < questionLength - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
        disabled={answer === null}
      >
        Next
      </button>
    );

  if (index === questionLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
        disabled={answer === null}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
