import React from 'react';
import Button from './addButton';

const Calculator = () => (
  <div className="calculator">

    <div className="input">0</div>

    <div className="buttonContainer">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" className="operation" />

      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="X" className="operation" />

      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" className="operation" />

      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" className="operation" />

      <Button label="0" className="zero" />
      <Button label="." />
      <Button label="=" className="operation" />
    </div>

  </div>

);

export default Calculator;
