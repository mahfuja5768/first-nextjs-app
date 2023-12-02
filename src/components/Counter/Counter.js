"use client";

import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="">
      <h2>Counter: {count}</h2>
      <button className="btn btn-primary my-6" onClick={() => setCount(count++)}>
        Increase
      </button>
      <br />
      <button className="btn btn-primary" onClick={() => setCount(count--)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
