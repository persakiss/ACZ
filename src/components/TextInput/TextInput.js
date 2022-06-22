import React from 'react';
import './TextInput.css';
import { useRef, useState } from 'react';

function TextInput() {

  const [width, setWidth] = useState(0);
  
  const changeHandler = evt => {
    setWidth(evt.target.value.length);
  };

function resizeInput() {
  this.style.width = this.value.length + "ch";
}

  return (
    <div id="bottom">
      <span p>armn@armn.ca &gt;</span>  <input type="text" style={{ width: width +'ch'}} autoFocus onFocus="this.select()" onChange={changeHandler}></input> <span className='blinking'>_</span>
    </div>
  )
}

export default TextInput