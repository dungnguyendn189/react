import { useEffect } from "react";

function Finish({ timeOut, dispatch }) {
  const mins = timeOut / 60;
  const second = timeOut % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "realTime" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 ? `0${Math.ceil(mins)}` : mins} :
      {second < 10 ? `0${Math.ceil(second)} ` : second}
    </div>
  );
}

export default Finish;
