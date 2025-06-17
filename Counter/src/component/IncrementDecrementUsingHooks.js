// IncrementDecrementUsingHooks.js
import React, { useState } from "react";

function IncrementDecrementUsingHooks() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={increment} className="btn btn-success m-2">
        +
      </button>
      <button onClick={decrement} className="btn btn-danger m-2">
        -
      </button>
    </div>
  );
}

export default IncrementDecrementUsingHooks;
