import "./Counter.scss";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p className="title">{count}</p>
      <button className="btn" onClick={increment}>
        +1
      </button>
    </>
  );
};
