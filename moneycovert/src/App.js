// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [money, setMoney] = useState({});
  const [selected1, setSelected1] = useState("USD");
  const [selected2, setSelected2] = useState("EUR");
  const [input, setInput] = useState("1");
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSlected1 = (e) => {
    setSelected1(e.target.value);
  };
  const handleSlected2 = (e) => {
    setSelected2(e.target.value);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchData() {
        try {
          setErr("");
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${selected1}&to=${selected2}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error(`Failed to fetch`);
          const data = await res.json();
          setMoney(data.rates);
          setErr("");
          setIsLoading(false);
        } catch (err) {
          if (err.name !== "AboutError") {
            setErr(err.message);
          }
        }
      }
      if (selected1 === selected2) return fetchData();
      fetchData();
      return function () {
        controller.abort();
      };
    },
    [selected1, selected2, input]
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        disabled={isLoading}
      />
      <select value={selected1} onChange={handleSlected1} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={selected2} onChange={handleSlected2} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{err ? " " : `${money[selected2]} ${selected2}`} </p>
    </div>
  );
}
