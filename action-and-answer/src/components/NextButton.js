function NextButton({ dispath, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispath({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
