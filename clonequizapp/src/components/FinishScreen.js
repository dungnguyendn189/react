function FinishScreen({
  points,
  dispatch,
  questionLength,
  hightPoint,
  totalPoints,
}) {
  let emojis;
  if (hightPoint <= 20) emojis = "💀💀💀";
  if (hightPoint <= 80) emojis = "🎗️🎗️🎗️";
  const totalPointPercents = (points / totalPoints) * 100;

  return (
    <>
      <p className="result">
        {emojis} You socred <strong>{points}</strong> out of {totalPoints}{" "}
        {Math.ceil(totalPointPercents)}%
      </p>
      <p className="highscore">(Hight Score: {hightPoint} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart QZ
      </button>
    </>
  );
}

export default FinishScreen;
