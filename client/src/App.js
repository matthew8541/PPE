import React, { useEffect, useState } from "react";
import './App.css';

const axios = require("axios");
const API = axios.create({ baseURL: 'http://localhost:5000' });

function App() {
  const [table, setTable] = useState([]);

  const getTables = async () => {
    try {
      const res = await API.get("/tables");
      // console.log(res.data)
      return res.data
    } catch (e) {
      console.log(e)
    }
  }
  
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
          <p key={idx}>{tb[0]}</p>
        )}
      </header>
    </div>
  );
}

export default App;
