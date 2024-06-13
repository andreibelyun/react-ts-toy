import { useState } from "react";
import st from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p className={st.title}>{count}</p>
      <button className={st.btn} onClick={increment}>
        +1
      </button>
    </>
  );
};
