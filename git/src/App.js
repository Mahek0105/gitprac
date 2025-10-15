
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [result2, setSubtract] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  }

  
  const handleSubtract = (e) => {
    e.preventDefault();
    const sub = parseFloat(num1) - parseFloat(num2);
    setSubtract(sub);
  }
  return (
    <>
    <form onSubmit = {handleSubmit}>
      <input type ="number" placeholder="Enter First Number" value={num1} onChange={(e) => setNum1(e.target.value)}></input>
      <input type ="number" placeholder="Enter Second Number" value={num2} onChange={(e) => setNum2(e.target.value)} ></input>

      <button type="submit">Add</button>

      <button type='submit' onClick={handleSubtract}>Subtract</button>
      <h2>Result : {result}</h2>
      <h2>Subtract: {result2}</h2>
      </form></>
  );
}

export default App;