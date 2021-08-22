import React, { useEffect, useState } from "react";
import './App.css';

import { getTables } from "./api/api";

function App() {
  const [table, setTable] = useState([]);
  
  useEffect(() => {
    getTables().then(data => setTable(data));
  }, [])

  if (!table) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>PPE Database Manager</h1>
        {table.map((tb, idx) => 
          <p key={idx}>{tb}</p>
        )}
      </header>
    </div>
  );
}

export default App;
