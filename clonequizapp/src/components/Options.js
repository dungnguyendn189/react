export default function Options({ question, answer, dispatch }) {
  const checkAns = answer !== null;
  return (
    <div className="options ">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            checkAns
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ payload: index, type: "newAnswer" })}
          key={option}
          disabled={checkAns}
        >
          {index + 1}. {option}
        </button>
      ))}
    </div>
  );
}
