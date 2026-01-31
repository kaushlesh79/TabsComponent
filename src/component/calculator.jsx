import React, { useState } from "react";
import "./calculatorstyle.css";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sign, setSign] = useState("");
  const [result, setResult] = useState(0);

  const calc = () => {
    if (sign === "+") {
      setResult(num1 + num2);
    } else if (sign === "-") {
      setResult(num1 - num2);
    } else if (sign === "*") {
      setResult(num1 * num2);
    } else {
      if (num2 !== 0) {
        setResult(num1 / num2);
      }
    }
    setNum1(0);
    setNum2(0);
    setSign("");
  };

  return (
    <div className="calcy">
      Calculator
      <div className="inputPlate">
        <input
          type="number"
          value={num1}
          placeholder="enter digit1"
          onChange={(e) => setNum1(Number(e.target.value))}
        ></input>
        <input
          type="number"
          value={num2}
          placeholder="enter digit2"
          onChange={(e) => setNum2(Number(e.target.value))}
        ></input>
      </div>
      <div className="buttonPlate">
        <button onClick={() => setSign("+")}>+</button>
        <button onClick={() => setSign("-")}>-</button>
        <button onClick={() => setSign("*")}>*</button>
        <button onClick={() => setSign("/")}>/</button>
      </div>
      <div className="answerPlate">
        <button onClick={() => calc(num1, num2)}> = </button>
      </div>
      <p1>The Answer is {result}</p1>
    </div>
  );
}
