import { useState } from "react";

export default function App() {
  return (
    <h1>
      <Test />
    </h1>
  );
}

function Test() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  console.log(step);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  const handleReset = () => {
    setStep(1);
    setCount(0);
  };
  return (
    <div>
      Test
      <div>
        <input
          type="range"
          value={step}
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>Step: {step}</span>
        <div>
          <span>
            <button onClick={() => setCount((c) => c - step)}>-</button>{" "}
            <input
              type="text"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />{" "}
            <button onClick={() => setCount((c) => c + step)}>+</button>
          </span>
        </div>
        <span>
          {count === 0
            ? "To day is"
            : count > 0
            ? `${count} day froms to day`
            : `${Math.abs(count)} days ago wass`}
          {date.toDateString()}
        </span>
      </div>
      {count !== 0 && step !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
