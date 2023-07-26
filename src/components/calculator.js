import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/calculator.css';
import Header from './Header';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    const newState = calculate(state, buttonName);
    setState(newState);
  }

  return (
    <>
      <Header />
      <div>
        <div className="prompAndCalDiv">
          <h2 className="myh2">Let&#39;s do some math!</h2>
          <div className="calInterface">
            <div className="calculator">
              <div className="buttonDiv">
                <div className="inputField">{state.next || state.total || '0'}</div>
              </div>
              <div className="buttonDiv">
                <button type="button" onClick={() => handleClick('AC')}>AC</button>
                <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
                <button type="button" onClick={() => handleClick('%')}>%</button>
                <button type="button" className="operation" onClick={() => handleClick('÷')}>÷</button>
              </div>
              <div className="buttonDiv">
                <button type="button" onClick={() => handleClick('7')}>7</button>
                <button type="button" onClick={() => handleClick('8')}>8</button>
                <button type="button" onClick={() => handleClick('9')}>9</button>
                <button type="button" className="operation" onClick={() => handleClick('x')}>x</button>
              </div>
              <div className="buttonDiv">
                <button type="button" onClick={() => handleClick('4')}>4</button>
                <button type="button" onClick={() => handleClick('5')}>5</button>
                <button type="button" onClick={() => handleClick('6')}>6</button>
                <button type="button" className="operation" onClick={() => handleClick('-')}>-</button>
              </div>
              <div className="buttonDiv">
                <button type="button" onClick={() => handleClick('1')}>1</button>
                <button type="button" onClick={() => handleClick('2')}>2</button>
                <button type="button" onClick={() => handleClick('3')}>3</button>
                <button type="button" className="operation" onClick={() => handleClick('+')}>+</button>
              </div>
              <div className="buttonDiv">
                <button type="button" className="zero" onClick={() => handleClick('0')}>0</button>
                <button type="button" onClick={() => handleClick('.')}>.</button>
                <button type="button" className="operation" onClick={() => handleClick('=')}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
