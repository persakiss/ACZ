import "./TextInput.css";
import LeftText from "../LeftText/LeftText";
import React, { useRef, useState } from 'react'


function TextInput() {
  const [width, setWidth] = useState(0);

  const changeHandler = (evt) => {
    setWidth(evt.target.value.length);
  };

  const inputRef = useRef();




  return (
    <div id="bottom">
      <LeftText />
      <input
        type="text"
        style={{ width: width + "ch" }}
        autoFocus
        onFocus="this.select()"
        onChange={changeHandler}
        id="console"
        spellcheck="false"
        autoComplete="false"
        name="hidden"
      >
      </input>
      <span className="blinking">_</span>
    </div>
  );
}

export default TextInput;
