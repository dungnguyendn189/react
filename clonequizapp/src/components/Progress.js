function Progress({ points, index, totalPoints, answer, questionLength }) {
  const counter = Number(answer !== null);

  return (
    <header className="progress">
      <progress max={questionLength} value={index + 1}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {questionLength}
      </p>
      <p>
        <strong>{points}</strong> /{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
