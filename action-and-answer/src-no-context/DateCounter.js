import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(states, action) {
  console.log(action, states);

  switch (action.type) {
    case "dec":
      return { ...states, count: states.count - states.step };
    case "inc":
      return { ...states, count: states.count + states.step };
    case "setCount":
      return { ...states, count: action.playload };
    case "setStep":
      return { ...states, step: action.playload };
    case "setReset":
      return initialState;
    default:
      throw new Error("unknow action");
  }

  // if (action.type === "inc") return states + action.playload;
  // if (action.type === "dec") return states - action.playload;
  // if (action.type === "setCount") return action.playload;
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", playload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", playload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "setReset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
