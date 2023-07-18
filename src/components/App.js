
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setinputValue] = useState("")
  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>

      <div>{inputValue}</div>
      <div className="child">
        <h1>Child Component</h1>
        <input onChange={(e) => setinputValue(e.target.value)} />
      </div>
    </div>
  )
}

export default App
