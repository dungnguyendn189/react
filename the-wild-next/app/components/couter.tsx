"use client";

interface DataItem {
  id: number;
  name: string;
}

type DataArray = DataItem[];

interface CounterProps {
  data: DataArray;
}

import { useState } from "react";

const Counter: React.FC<CounterProps> = ({ data }) => {
  const [count, setCount] = useState<number>(0);
  console.log(data);
  return (
    <div>
      <p>There are {data.length}</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
