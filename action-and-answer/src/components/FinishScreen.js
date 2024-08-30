function FinishScreen({ points, maxPossiblePoints, hightScore, dispath }) {
  const precentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (precentage >= 100) emoji = "🥇";
  if (precentage >= 80) emoji = "🥈";
  if (precentage === 0) emoji = "🥴";
  return (
    <>
      <p className="result">
        {emoji} You socred <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        {Math.ceil(precentage)}%
      </p>
      <p className="highscore">(Hight Score: {hightScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispath({ type: "restart" })}
      >
        Restart QZ
      </button>
    </>
  );
}

export default FinishScreen;
