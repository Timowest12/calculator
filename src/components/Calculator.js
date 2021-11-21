import React, { Component } from "react";

export class Calculator extends Component {
  render() {
    return (
      <div className="calculatorcontainer">
        <div className="outputbar">
          <span className="outputinp">0</span>
        </div>

        <div className="keys">
          <div className="row row1">
            <div className="key key1">ac</div>
            <div className="key key2">+/-</div>
            <div className="key key3">%</div>
            <div className="key key4 orange">/</div>
          </div>
          <div className="row row2">
            <div className="key key1">7</div>
            <div className="key key2">8</div>
            <div className="key key3">9</div>
            <div className="key key4 orange">*</div>
          </div>
          <div className="row row3">
            <div className="key key1">4</div>
            <div className="key key2">5</div>
            <div className="key key3">6</div>
            <div className="key key4 orange">-</div>
          </div>
          <div className="row row4">
            <div className="key key1">1</div>
            <div className="key key2">2</div>
            <div className="key key3">3</div>
            <div className="key key4 orange">+</div>
          </div>
          <div className="row row5">
            <div className="key key1 flex2">0</div>
            <div className="key key2 flex1">1</div>
            <div className="key key3 flex1 orange">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
