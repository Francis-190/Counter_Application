// App.js
import React from "react";
import IncrementDecrement from "./component/IncrementDecrement";
import IncrementDecrementUsingHooks from "./component/IncrementDecrementUsingHooks";

function App() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-5">Assignment-2 Counter Application</h1>
      <div className="d-flex justify-content-around">
        <div className="p-4 border rounded shadow bg-light">
          <h2>Class Component</h2>
          <IncrementDecrement />
        </div>
        <div className="p-4 border rounded shadow bg-light">
          <h2>Function Component</h2>
          <IncrementDecrementUsingHooks />
        </div>
      </div>
    </div>
  );
}

export default App;
