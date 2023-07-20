import React, { useState } from 'react';
import Button from './addButton';
import calculate from '../logic/calculate';

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
    <div className="calculator">
      <div className="buttonContainer" />
      <div className="input">{state.next || state.total || '0'}</div>

      <div className="buttonContainer">
        <Button label="AC" onClick={() => handleClick('AC')} />
        <Button label="+/-" onClick={() => handleClick('+/-')} />
        <Button label="%" onClick={() => handleClick('%')} />
        <Button label="÷" className="operation" onClick={() => handleClick('÷')} />

        <Button label="7" onClick={() => handleClick('7')} />
        <Button label="8" onClick={() => handleClick('8')} />
        <Button label="9" onClick={() => handleClick('9')} />
        <Button label="x" className="operation" onClick={() => handleClick('x')} />

        <Button label="4" onClick={() => handleClick('4')} />
        <Button label="5" onClick={() => handleClick('5')} />
        <Button label="6" onClick={() => handleClick('6')} />
        <Button label="-" className="operation" onClick={() => handleClick('-')} />

        <Button label="1" onClick={() => handleClick('1')} />
        <Button label="2" onClick={() => handleClick('2')} />
        <Button label="3" onClick={() => handleClick('3')} />
        <Button label="+" className="operation" onClick={() => handleClick('+')} />

        <Button label="0" className="zero" onClick={() => handleClick('0')} />
        <Button label="." onClick={() => handleClick('.')} />
        <Button label="=" className="operation" onClick={() => handleClick('=')} />
      </div>

    </div>
  );
};

export default Calculator;
