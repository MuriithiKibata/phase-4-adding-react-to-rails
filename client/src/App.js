import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function App() {
  useEffect (() => {
    fetch("/movies")
    .then(res => res.json())
    .then(res => console.log(res))
  }, [])
  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
