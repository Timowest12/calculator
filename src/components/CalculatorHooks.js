import calculate from "../logic/calculate";
import React, { useState } from 'react';

const CalulatorHooks = () => {
  const [calcobj, setCalcObj] = useState({});
  const [calcoutput, setCalcOutput] = useState(0);
  const clickbutton = (inp) => (event) => {     
    let returnobj = calculate(calcobj,inp);
    setCalcObj(returnobj)
    setCalcOutput(returnobj.next)
    if (returnobj.next === null && returnobj.operation === null) {
      setCalcOutput(returnobj.total)
    }
    if (returnobj.next === null && returnobj.operation !== null) {
      setCalcOutput(returnobj.operation)
    }
    if (inp === 'ac') {
      setCalcObj({})
      setCalcOutput(0)
    }
}
    return (
        <div className="calculatorcontainer">
        <div className="outputbar">
          <span className="outputinp">{calcoutput}</span>
        </div>

        <div className="keys">
          <div className="row row1">
            <div onClick={clickbutton('ac')} className="key key1">ac</div>
            <div onClick={clickbutton('+/-')} className="key key2">+/-</div>
            <div onClick={clickbutton('%')} className="key key4">%</div>
            <div onClick={clickbutton('÷')} className="key key3 orange">÷</div>
          </div>
          <div className="row row2">
            <div onClick={clickbutton('7')} className="key key1">7</div>
            <div onClick={clickbutton('8')} className="key key2">8</div>
            <div onClick={clickbutton('9')} className="key key3">9</div>
            <div onClick={clickbutton('x')} className="key key4 orange">x</div>
          </div>
          <div className="row row3">
            <div onClick={clickbutton('4')} className="key key1">4</div>
            <div onClick={clickbutton('5')} className="key key2">5</div>
            <div onClick={clickbutton('6')} className="key key3">6</div>
            <div onClick={clickbutton('-')} className="key key4 orange">-</div>
          </div>
          <div className="row row4">
            <div onClick={clickbutton('1')} className="key key1">1</div>
            <div onClick={clickbutton('2')} className="key key2">2</div>
            <div onClick={clickbutton('3')} className="key key3">3</div>
            <div onClick={clickbutton('+')} className="key key4 orange">+</div>
          </div>
          <div className="row row5">
            <div onClick={clickbutton('0')} className="key key1 flex2">0</div>
            <div onClick={clickbutton('.')} className="key key2 flex1">.</div>
            <div onClick={clickbutton('=')}  className="key key3 flex1 orange">=</div>
          </div>
        </div>
      </div>
    )
}

export default CalulatorHooks
