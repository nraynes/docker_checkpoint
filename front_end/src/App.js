import React, { useState, useEffect } from 'react';
import "./styles/app/app.css";
function App() {
  const [greeting, setGreeting] = useState("Loading...");

  useEffect(() => {
    fetch(`http://localhost:1000/acquire`)
      .then(data => data.json())
      .then((data) => {
        setGreeting(data[0].greeting_text)
      })
  }, [])

  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
