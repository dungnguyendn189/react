function FinishScreen({ points, maxPossiblePoints }) {
  const precentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You socred <strong>{points}</strong> out of {maxPossiblePoints}{" "}
      {Math.ceil(precentage)}%
    </p>
  );
}

export default FinishScreen;
